import {
	ArrowUpToLine,
	Bookmark,
	Link2,
	MessageSquareMore,
} from 'lucide-react';
import { useSnackbar } from 'notistack';
import { usePathname } from 'next/navigation';
import useBlogMarkStore from '@/store/useBookmarkStore.ts';
import { Button } from '../ui/button.tsx';

export function Topbtn() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<Button variant='outline' size='icon' onClick={scrollToTop}>
			<ArrowUpToLine size={16} />
		</Button>
	);
}

export function CopyUrlBtn() {
	const { enqueueSnackbar } = useSnackbar();

	const currentUrl =
		typeof window !== 'undefined' ? window.location.href : undefined;
	const handleCopyUrl = () => {
		if (currentUrl)
			navigator.clipboard
				.writeText(currentUrl)
				.then(() => {
					enqueueSnackbar('클립보드에 복사되었습니다.', { variant: 'success' });
				})
				.catch(() => {
					enqueueSnackbar('클립보드에 복사에 실패하였습니다.', {
						variant: 'error',
					});
				});
	};

	return (
		<Button variant='outline' size='icon' onClick={handleCopyUrl}>
			<Link2 size={16} />
		</Button>
	);
}

export function ScrollToCommentBtn() {
	const scrollToComment = () =>
		document.querySelector('.giscus')?.scrollIntoView();

	return (
		<Button variant='outline' size='icon' onClick={scrollToComment}>
			<MessageSquareMore size={16} />
		</Button>
	);
}

export function BookmarkBtn() {
	const pathname = usePathname();

	const addBookMark = useBlogMarkStore((state) => state.addBookmark);

	const slug = useBlogMarkStore((state) => state.bookmarkList);

	const handleBoomMark = () => {
		if (pathname) addBookMark(pathname);
		console.log(slug);
	};

	return (
		<Button variant='outline' size='icon' onClick={handleBoomMark}>
			<Bookmark size={16} />
		</Button>
	);
}
