import BookmarkList from '@/components/bookmark/BookmarkList.tsx';

function Bookmark() {
	return (
		<section className=' mx-auto w-full max-w-[900px] mt-8 px-5'>
			<h1 className='mx-auto font-bold text-xl text-center mb-5'>
				북마크 목록
			</h1>
			<BookmarkList />
		</section>
	);
}

export default Bookmark;
