import Giscus from '@/components/postDetail/Giscus.tsx';
import PostBody from '@/components/postDetail/PostBody.tsx';
import PostHeader from '@/components/postDetail/PostHeader.tsx';
import { getPostDetail, getPostPaths, parsePostPathToUrl } from '@/lib/post.ts';
import { Metadata } from 'next';
import React from 'react';

type Props = {
	params: { category: string; slug: string };
};

// 임시도메인
const baseDomain = 'https://tree-book.vercel.app/';

// 정적사이트 생성(SSG)하여 빌드시점에 결정된(generateStaticParams) 다른 동적 경로를 허용하지 않음
export const dynamicParams = false;

// 동적 메타데이터
export async function generateMetadata({
	params: { category, slug },
}: Props): Promise<Metadata> {
	const post = await getPostDetail(category, slug);

	const title = `${post.title} | D5BL5G`;
	const imageURL = `${baseDomain}${post.thumbnail}`;

	return {
		title,
		description: post.desc,

		openGraph: {
			title,
			description: post.desc,
			type: 'article',
			publishedTime: post.date.toISOString(),
			url: `${baseDomain}${post.url}`,
			images: [imageURL],
		},
		twitter: {
			title,
			description: post.desc,
			images: [imageURL],
		},
	};
}

// SSG(정적 사이트 생성)
// 빌드 시 모든 가능한 동적 경로의 매개변수를 반환 (ISR 방식에선 실행되지 않음)
// 빌드 때 NextJS가 자동으로 감지하여 반환 값의 ID들을 미리 백엔드 서버에서 불러오고, 그 정보들을 빌드 타임 때 넘겨줘 미리 불러올 HTML 만든다.
export function generateStaticParams() {
	const postPaths: string[] = getPostPaths();
	const paramList = postPaths
		.map((path) => parsePostPathToUrl(path))
		.map((item) => ({ category: item.categoryPath, slug: item.slug }));

	return paramList;
}

async function Slug({ params: { category, slug } }: Props) {
	const post = await getPostDetail(category, slug);
	return (
		<div className='prose dark:prose-invert mx-auto w-full max-w-[900px] m-6 px-5'>
			<PostHeader post={post} />
			<PostBody post={post} />
			<hr className='mt-6' />
			<Giscus />
		</div>
	);
}

export default Slug;
