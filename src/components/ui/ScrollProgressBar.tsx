'use client';

import { useEffect, useState } from 'react';

function ScrollProgressBar() {
	const [mounted, setMounted] = useState(false); // SSR
	const [scrollTop, setScrollTop] = useState(0);

	const onScroll = () => {
		const winScroll = document.documentElement.scrollTop; // 현재 문서의 스크롤된 높이
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight; // 문서 전체 높이에서 뷰포트 높이를 뺀 값
		const scrolled = (winScroll / height) * 100; // 스크롤된 비율을 백분율로 계산

		setScrollTop(scrolled);
	};

	useEffect(() => {
		// 컴포넌트가 마운트될 때 스크롤 이벤트 리스너를 추가
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll); // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너를 제거
	}, []);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='fixed top-0 z-20 h-1 w-full bg-background'>
			<div className='h-1 bg-primary' style={{ width: `${scrollTop}%` }} />
		</div>
	);
}

export default ScrollProgressBar;
