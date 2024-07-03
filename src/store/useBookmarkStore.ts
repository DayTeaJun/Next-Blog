import { create } from 'zustand';

interface InitialState {
	slug?: string;
}

interface BookmarkState {
	bookmarkList: InitialState[];
	addBookmark: (slug: string) => void;
	removeBookmark: (id: string) => void;
}

const updateBookmark = (prev: (string | undefined)[], slug: string) => {
	localStorage.slug = JSON.stringify([...prev, slug]);
};

const useBlogMarkStore = create<BookmarkState>((set) => ({
	bookmarkList: [],
	addBookmark: (slug) =>
		set((prev) => {
			const isDuplicate = prev.bookmarkList.some(
				(bookmark) => bookmark.slug === slug
			);
			if (isDuplicate) {
				return prev;
			}
			const prevSlug = prev.bookmarkList.map((bookmark) => bookmark.slug);

			updateBookmark(prevSlug, slug);
			return {
				bookmarkList: [...prev.bookmarkList, { slug }],
			};
		}),
	removeBookmark: (slug) =>
		set((prev) => ({
			bookmarkList: prev.bookmarkList.filter((e) => e.slug !== slug),
		})),
}));

export default useBlogMarkStore;
