'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import useBlogMarkStore from '@/store/useBookmarkStore.ts';
import { useEffect } from 'react';
import Snackbar from './Snackbar.tsx';

export default function ThemeProvider({
	children,
	...props
}: ThemeProviderProps) {
	const initialState = useBlogMarkStore((state) => state.setInitialState);

	useEffect(() => {
		const savedBookmark = localStorage.getItem('slug');
		if (savedBookmark) {
			initialState(JSON.parse(savedBookmark));
		}
	}, []);

	// eslint-disable-next-line react/jsx-props-no-spreading
	return (
		<NextThemesProvider {...props}>
			<Snackbar>{children}</Snackbar>
		</NextThemesProvider>
	);
}
