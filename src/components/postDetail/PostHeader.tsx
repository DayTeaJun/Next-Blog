import { Post } from '@/config/types.ts';

interface Props {
	post: Post;
}

function PostHeader({ post }: Props) {
	return (
		<header className='text-center'>
			<h1 className='mb-5 text-3xl'>{post.title}</h1>
			<div className='flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
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
