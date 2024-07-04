import { create } from 'zustand';

interface BookmarkState {
	bookmarkList: (string | undefined)[];
	setInitialState: (bookmarks: string[]) => void;
	addBookmark: (slug: string) => void;
	removeBookmark: (slug: string) => void;
}

const updateBookmark = (prev: (string | undefined)[], slug?: string) => {
	localStorage.slug = JSON.stringify([...prev, slug]);
};

const useBlogMarkStore = create<BookmarkState>((set) => ({
	bookmarkList: [],
	setInitialState: (bookmarks) =>
		set(() => ({
			bookmarkList: bookmarks,
		})),
	addBookmark: (slug) =>
		set((prev) => {
			const isDuplicate = prev.bookmarkList.some(
				(bookmark) => bookmark === slug
			);
			if (isDuplicate) {
				return prev;
			}
			updateBookmark(prev.bookmarkList, slug);
			return {
				bookmarkList: [...prev.bookmarkList, slug],
			};
		}),
	removeBookmark: (slug) =>
		set((prev) => {
			const updatedBookmarks = prev.bookmarkList.filter(
				(bookmark) => bookmark !== slug
			);
			localStorage.slug = JSON.stringify(updatedBookmarks);

			return {
				bookmarkList: updatedBookmarks,
			};
		}),
}));

export default useBlogMarkStore;
