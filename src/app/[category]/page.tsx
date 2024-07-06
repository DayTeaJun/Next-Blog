import PostList from '@/components/postList/PostList.tsx';
import { baseDomain, blogName, blogThumbnailURL } from '@/config/const.ts';
import { getCategoryList, getCategoryPublicName } from '@/lib/post.ts';
import { Metadata } from 'next';

type Props = {
	params: { category: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export async function generateStaticParams() {
	const categoryList = getCategoryList();
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
