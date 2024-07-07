'use client';

import { Post } from '@/config/types.ts';
import { BookmarkBtn } from './Buttons.tsx';

interface Props {
	post: Post;
}

function PostHeader({ post }: Props) {
	return (
		<header className='text-center relative'>
			<h1 className='mb-5 text-3xl'>{post.title}</h1>
			<div className='absolute right-0 md:top-0'>
				<BookmarkBtn />
			</div>
			<div className='flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400 '>
				<div className='flex items-center gap-1'>
					<span>{post.dateString}</span>
				</div>
				<div className='flex items-center gap-1 border text-xs  p-1 rounded-full'>
					<span>{post.readingMinutes}분</span>
				</div>
			</div>
			<hr className='mt-5 mb-5' />
		</header>
	);
}

export default PostHeader;
