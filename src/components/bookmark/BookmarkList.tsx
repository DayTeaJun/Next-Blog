'use client';

import React from 'react';
import Link from 'next/link';
import useBlogMarkStore from '@/store/useBookmarkStore.ts';

function BookmarkList() {
	const bookmarkList = useBlogMarkStore((state) => state.bookmarkList);

	return (
		<ul className=' flex flex-col gap-5'>
			{bookmarkList.length > 0 ? (
				bookmarkList.map((site) => {
					const postUrl = site && site.split('/');
					const postName = postUrl && postUrl[postUrl.length - 1];

					return (
						<li
							key={site}
							className='mx-auto border rounded-xl w-full text-center cursor-pointer dark:hover:bg-[#3b3b3b]
                                hover:bg-slate-100
                                '
						>
							{site && postName && (
								<Link className='w-full h-full block font-bold p-5' href={site}>
									{postName
										.split('_')
										.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
										.join(' ')}
								</Link>
							)}
						</li>
					);
				})
			) : (
				<h2>북마크된 목록이 없습니다.</h2>
			)}
		</ul>
	);
}

export default BookmarkList;
