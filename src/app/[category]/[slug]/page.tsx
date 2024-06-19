import PostBody from '@/components/postDetail/PostBody';
import { getPostDetail } from '@/lib/post';
import React from 'react';

type Props = {
  params: { category: string; slug: string };
};

const Slug = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug);
  return <PostBody post={post} />;
};

export default Slug;
