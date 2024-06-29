import { Post } from '@/config/types.ts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

interface Props {
	post: Post;
}

function PostCard({ post }: Props) {
	return (
		<li
			key={post.url}
			className='border  border-neutral-700 rounded-xl cursor-pointer'
		>
			<Link className='h-full  flex flex-col gap-3' href={post.url}>
				<div className=' relative aspect-video bg-neutral-600 rounded-t-xl overflow-hidden'>
					<Image
						alt={post.title}
						src={post.thumbnail}
						sizes='(max-width: 900px) 50vw, 450px'
						priority
						fill
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<div className='flex flex-col gap-4 justify-between items-center p-4'>
					<div className=' w-full flex text-sm items-center font-bold text-neutral-800 dark:text-neutral-300'>
						<h2>{post.title}</h2>
					</div>

					<div className=' w-full flex text-xl items-center font-bold text-neutral-800 dark:text-neutral-300'>
						<p>{post.desc}</p>
					</div>
					<div className=' w-full flex justify-between items-center font-bold  text-neutral-800 dark:text-neutral-500'>
						<div className='flex gap-2 items-center'>
							<FaRegCalendarAlt size={18} />
							<p>{post.dateString}</p>
						</div>
						<div className='flex gap-1 items-center'>
							<IoMdTime size={18} />
							<p>{post.readingMinutes}분</p>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}

export default PostCard;
