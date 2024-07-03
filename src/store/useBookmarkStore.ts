import { create } from 'zustand';

interface InitialState {
	slug?: string;
}

interface BookmarkState {
	bookmarkList: InitialState[];
	addBookmark: (slug: string) => void;
	removeBookmark: (id: string) => void;
}

const useBlogMarkStore = create<BookmarkState>((set) => ({
	bookmarkList: [],
	addBookmark: (slug) =>
		set((prev) => ({
			bookmarkList: [...prev.bookmarkList, { slug }],
		})),
	removeBookmark: (slug) =>
		set((prev) => ({
			bookmarkList: prev.bookmarkList.filter(
				(e) => e.slug !== undefined && e.slug !== slug
			),
		})),
}));

export default useBlogMarkStore;
