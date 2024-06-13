import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';

const BASE_PATH = path.join('src', 'posts');
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string) => {
  const postAbstract = parsePostPathToUrl(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail };
};

export const parsePostPathToUrl = (postPath: string) => {
  // category1/title1/content
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}\\`, '')
    .replace('.mdx', '');

  // category1, title1
  const [categoryPath, slug] = filePath.split('\\');
  console.log(categoryPath, slug);

  // /blog/category1/title1
  const url = `/blog/${categoryPath}/${slug}`;

  return { url, categoryPath, slug };
};

// MDX Detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content, readingMinutes };
};

export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string) => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
};
