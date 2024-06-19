import PostBody from '@/components/postDetail/PostBody';
import PostHeader from '@/components/postDetail/PostHeader';
import { getPostDetail } from '@/lib/post';
import React from 'react';

type Props = {
  params: { category: string; slug: string };
};

const Slug = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug);
  return (
    <div className="mx-auto w-full max-w-[900px] py-6">
      <PostHeader post={post} />
      <PostBody post={post} />
    </div>
  );
};

export default Slug;
