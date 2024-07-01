import { ArrowUpToLine, Link2 } from 'lucide-react';
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
	const currentUrl =
		typeof window !== 'undefined' ? window.location.href : undefined;
	const handleCopyUrl = () => {
		if (currentUrl)
			navigator.clipboard
				.writeText(currentUrl)
				.then(() => {
					alert('클립보드에 복사되었습니다.');
				})
				.catch((error) => {
					console.log(error);
				});
	};

	return (
		<Button variant='outline' size='icon' onClick={handleCopyUrl}>
			<Link2 size={16} />
		</Button>
	);
}
