import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import { Post } from '@/config/types';

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
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }}
    />
  );
}

export default PostBody;
