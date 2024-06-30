import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/layout/provider/themeProvider.tsx';
import Header from '@/layout/Header.tsx';
import Footer from '@/layout/Footer.tsx';

export const metadata: Metadata = {
	title: 'Next Blog',
	description: 'NextJS 이용한 개인 블로그',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='h-hull scroll-smooth'>
			<body className='h-[100vh] flex flex-col'>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className='flex flex-1 flex-col mt-[80px]'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
