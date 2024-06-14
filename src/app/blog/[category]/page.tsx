import PostCard from '@/components/postList/PostCard';
import { getPostList } from '@/lib/post';

type Props = {
  params: { category: string };
};

const Category = async ({ params }: Props) => {
  const postList = await getPostList(params.category);

  return (
    <section className=" mx-auto w-[900px] h-[100vh] mt-8">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {postList.map((post) => (
          <PostCard key={post.url + post.date} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Category;
