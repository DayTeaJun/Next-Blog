import { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { MDXComponents } from 'mdx/types';

const blockquoteComponents = (props: PropsWithChildren) => {
	return (
		<div className='flex items-center rounded-md px-5 py-3 text-secondary-foreground bg-secondary blockquote'>
			{props.children}
		</div>
	);
};

function ALinkComponents({
	children,
	href,
	...props
}: PropsWithChildren<LinkProps>) {
	return (
		<a
			{...props}
			target='_blank'
			href={href.toString() || ''}
			className='break-words font-bold text-cyan-800 no-underline underline-offset-2 hover:underline'
		>
			{children}
		</a>
	);
}

const MdxComponents: MDXComponents = {
	blockquote: blockquoteComponents,
	a: ALinkComponents as any,
};

export default MdxComponents;
