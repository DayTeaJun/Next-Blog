import { getAllPosts } from '@/lib/post';

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slugs: post.slug.split('/').slice(2), // 슬러그 구조에 맞게 조정
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slugs: string[] };
}) {
  const slug = `/posts/${params.slugs.join('/')}`;
  const posts = getAllPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    // 404 페이지 처리를 위해 NotFound 컴포넌트나 에러 처리 추가
    return <div>Post not found</div>;
  }

  return <div>{slug}</div>;
}
