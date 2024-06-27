'use client';

import React from 'react';
import { CategoryDetail } from '@/config/types.ts';
import CategoryButton from './CategoryButton.tsx';

interface CategoryProps {
	categoryList: CategoryDetail[];
	allPostCount: number;
	currentCategory?: string;
}

function CategoryList({
	categoryList,
	currentCategory = 'all',
	allPostCount,
}: CategoryProps) {
	return (
		<section className='mb-8'>
			<ul className='flex gap-6'>
				<CategoryButton
					href='/'
					isCurrent={currentCategory === 'all'}
					displayName='All'
					count={allPostCount}
				/>
				{categoryList.map((cg) => (
					<CategoryButton
						key={cg.dirName}
						href={`/${cg.dirName}`}
						displayName={cg.publicName}
						isCurrent={cg.dirName === currentCategory}
						count={cg.count}
					/>
				))}
			</ul>
		</section>
	);
}

export default CategoryList;
