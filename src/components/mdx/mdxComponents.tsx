import { PropsWithChildren } from 'react';

const blockquoteComponents = (props: PropsWithChildren) => {
	return (
		<div className='flex items-center rounded-md px-5 py-3 text-secondary-foreground bg-secondary blockquote'>
			{props.children}
		</div>
	);
};

const MdxComponents = {
	blockquote: blockquoteComponents,
};

export default MdxComponents;
