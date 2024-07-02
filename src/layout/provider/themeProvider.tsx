'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import Snackbar from './Snackbar.tsx';

export default function ThemeProvider({
	children,
	...props
}: ThemeProviderProps) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return (
		<NextThemesProvider {...props}>
			<Snackbar>{children}</Snackbar>
		</NextThemesProvider>
	);
}
