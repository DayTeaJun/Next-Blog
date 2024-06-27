import PostCard from '@/components/postList/PostCard.tsx';
import { getCategoryDetailList, getPostList } from '@/lib/post.ts';
import CategoryList from './CategoryList.tsx';

type Props = {
	category?: string;
};

async function PostList({ category }: Props) {
	const postList = await getPostList(category);
	const categoryList = await getCategoryDetailList();

	return (
		<section className=' mx-auto w-full max-w-[900px] mt-8 px-5'>
			<CategoryList
				allPostCount={postList.length}
				currentCategory={category}
				categoryList={categoryList}
			/>
			<section>
				<ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12'>
					{postList.map((post) => (
						<PostCard key={post.url + post.date} post={post} />
					))}
				</ul>
			</section>
		</section>
	);
}

export default PostList;
