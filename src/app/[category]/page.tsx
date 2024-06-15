import PostList from '@/components/postList/PostList';

type Props = {
  params: { category: string };
};

const Category = async ({ params }: Props) => {
  return <PostList category={params.category} />;
};

export default Category;
