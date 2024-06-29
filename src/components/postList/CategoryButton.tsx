import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button.tsx';

interface Props {
	isCurrent: boolean;
	displayName: string;
	href: string;
	count: number;
}

function CategoryButton({ isCurrent, displayName, href, count }: Props) {
	return (
		<li>
			<Button
				asChild
				size='sm'
				className=' font-bold'
				variant={isCurrent ? 'default' : 'ghost'}
			>
				<Link href={href}>
					{displayName} ({count})
				</Link>
			</Button>
		</li>
	);
}

export default CategoryButton;
