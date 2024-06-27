import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import { Post } from '@/config/types.ts';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkBreaks from 'remark-breaks';
import MdxComponents from '@/components/mdx/mdxComponents.ts';

interface Props {
	post: Post;
}

function PostBody({ post }: Props) {
	return (
		<MDXRemote
			source={post.content}
			options={{
				parseFrontmatter: true,
				mdxOptions: {
					remarkPlugins: [remarkGfm, remarkBreaks],
					rehypePlugins: [[rehypePrettyCode]],
				},
			}}
			components={MdxComponents}
		/>
	);
}

export default PostBody;
