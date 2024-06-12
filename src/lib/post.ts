import fs from 'fs';
import matter from 'gray-matter';

const parsePost = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');

  const { data, content } = matter(file); // mdx parsing
};
