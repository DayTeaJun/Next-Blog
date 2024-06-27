import { serialize } from 'next-mdx-remote/serialize';

export default function serializeMdx(source: string) {
	return serialize(source, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
			format: 'mdx',
		},
	});
}
