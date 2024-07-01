'use client';

import Link from 'next/link';
import cn from '@/lib/utils.ts';
import { HeadingItem } from '@/config/types.ts';
import useHeadingsObserver from '@/hook/useHeadingsObserver.ts';
import { Topbtn } from './TocButtons.tsx';

interface Props {
	toc: HeadingItem[];
}

function TableOfContent({ toc }: Props) {
	const activeIdList = useHeadingsObserver('h2, h3');
	console.log(activeIdList);

	return (
		<aside className='not-prose absolute -top-[200px] left-full hidden h-full xl:block '>
			<div className='sticky top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px]'>
				<div className='mb-4 border-l px-4 py-2'>
					<div className='mb-1 font-bold'>On this page</div>
					<ul className='text-xs'>
						{toc.map((item) => {
							const isH3 = item.indent === 1;
							const isIntersecting = activeIdList.includes(item.link);
							return (
								<li
									key={item.link}
									className={cn(
										isH3 && 'ml-4',
										isIntersecting && 'font-medium text-pink-600',
										'py-1 transition'
									)}
								>
									<Link href={item.link}>{item.text}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='flex flex-row gap-1 px-4'>
					<Topbtn />
				</div>
			</div>
		</aside>
	);
}

export default TableOfContent;
