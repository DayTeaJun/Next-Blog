import PostList from '@/components/postList/PostList.tsx';
import { getCategoryDetailList, getCategoryPublicName } from '@/lib/post.ts';
import { Metadata } from 'next';

type Props = {
	params: { category: string };
};

const blogName = 'next-blog';

// 임시도메인
const baseDomain = 'https://tree-book.vercel.app/';

// 임시섬네일
const blogThumbnailURL = '/posts/next/next_blog_test/thumbnail.png';

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateStaticParams() {
	const categoryList = await getCategoryDetailList();
	const paramList = categoryList.map((category) => ({ category }));
	return paramList;
}

export async function generateMetadata({
	params: { category },
}: Props): Promise<Metadata> {
	const publicTitle = getCategoryPublicName(category);
	const title = `${publicTitle} | ${blogName}`;
	const url = `${baseDomain}/${category}`;

	return {
		title,
		openGraph: {
			title,
			url,
			images: [blogThumbnailURL],
		},
		twitter: {
			title,
			images: [blogThumbnailURL],
		},
	};
}

function Category({ params }: Props) {
	return <PostList category={params.category} />;
}

export default Category;
