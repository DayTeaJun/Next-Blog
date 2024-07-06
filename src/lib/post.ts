import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';
import { CategoryDetail, HeadingItem, PostMatter } from '@/config/types.ts';

const BASE_PATH = path.join('src', 'posts');
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX Detail
const parsePostDetail = async (postPath: string) => {
	const file = fs.readFileSync(postPath, 'utf8');
	const { data, content } = matter(file);
	const grayMatter = data as PostMatter;
	const readingMinutes = Math.ceil(readingTime(content).minutes);
	const dateString = dayjs(grayMatter.date)
		.locale('ko')
		.format('YYYY년 MM월 DD일');
	return { ...grayMatter, dateString, content, readingMinutes };
};

export const getCategoryPublicName = (dirPath: string) =>
	dirPath
		.split('_')
		.map((token) => token[0].toUpperCase() + token.slice(1, token.length))
		.join(' ');

export const parsePostPathToUrl = (postPath: string) => {
	// category1/title1/content
	const filePath = postPath
		.slice(postPath.indexOf(BASE_PATH))
		.replace(`${BASE_PATH}${path.sep}`, '')
		.replace('.mdx', '');

	// category1, title1
	const [categoryPath, slug] = filePath.split(path.sep);

	// /blog/category1/title1
	const url = `/${categoryPath}/${slug}`;
	const categoryPublicName = getCategoryPublicName(categoryPath);

	return { url, categoryPath, slug, categoryPublicName };
};

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string) => {
	const postAbstract = parsePostPathToUrl(postPath);
	const postDetail = await parsePostDetail(postPath);
	return { ...postAbstract, ...postDetail };
};

export const getAllPosts = () => {
	const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
	return postPaths.map((paths) => {
		return {
			slug: paths.slice(paths.indexOf(BASE_PATH)).replace('.mdx', ''),
		};
	});
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

export const getCategoryList = () => {
	const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
	const cgList = cgPaths.map((paths) => paths.split(path.sep).slice(-1)?.[0]);
	return cgList;
};

export const getCategoryDetailList = async () => {
	const postList = await getPostList();
	const result: { [key: string]: number } = {};
	postList.forEach((post) => {
		const category = post.categoryPath;
		if (result[category]) {
			result[category] += 1;
		} else {
			result[category] = 1;
		}
	});
	const detailList: CategoryDetail[] = Object.entries(result).map(
		([category, count]) => ({
			dirName: category,
			publicName: getCategoryPublicName(category),
			count,
		})
	);

	return detailList;
};

export const getPostDetail = async (category: string, slug: string) => {
	const filePath = `${POSTS_PATH}/${category}/${slug}/content.mdx`;
	const detail = await parsePost(filePath);
	return detail;
};

export const parseToc = (content: string): HeadingItem[] => {
	const regex = /^(##|###) (.*$)/gim;
	const headingList = content.match(regex);
	return (
		headingList?.map((heading: string) => ({
			text: heading.replace('##', '').replace('#', ''),
			link: `#${heading
				.replace('# ', '')
				.replace('#', '')
				// eslint-disable-next-line
				.replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
				.replace(/ /g, '-')
				.toLowerCase()
				.replace('?', '')}`,
			indent: (heading.match(/#/g)?.length || 2) - 2,
		})) || []
	);
};
