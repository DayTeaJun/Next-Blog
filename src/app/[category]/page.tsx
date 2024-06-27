import PostList from '@/components/postList/PostList.tsx';

type Props = {
	params: { category: string };
};

function Category({ params }: Props) {
	return <PostList category={params.category} />;
}

export default Category;
