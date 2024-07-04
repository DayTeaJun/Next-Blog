import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSnackbar } from 'notistack';
import useBlogMarkStore from '@/store/useBookmarkStore.ts';
import {
	ArrowUpToLine,
	Bookmark,
	BookmarkCheck,
	Link2,
	MessageSquareMore,
} from 'lucide-react';
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
	const slug = useBlogMarkStore((state) => state.bookmarkList);
	const addBookMark = useBlogMarkStore((state) => state.addBookmark);
	const removeBookmark = useBlogMarkStore((state) => state.removeBookmark);
	const [isBookmarked, setIsBookmarked] = useState(false);

	const handleBoomMark = () => {
		if (pathname) {
			if (isBookmarked) {
				removeBookmark(pathname);
			} else {
				addBookMark(pathname);
			}
			setIsBookmarked(!isBookmarked);
		}
	};

	useEffect(() => {
		if (pathname && slug.length > 0) {
			setIsBookmarked(slug.some((bookmark) => bookmark === pathname));
		}
	}, [pathname, slug]);

	return (
		<Button variant='ghost' size='icon' onClick={handleBoomMark}>
			{isBookmarked ? <BookmarkCheck size={36} /> : <Bookmark size={36} />}
		</Button>
	);
}
