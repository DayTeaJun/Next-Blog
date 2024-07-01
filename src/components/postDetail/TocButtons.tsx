import { ArrowUpToLine } from 'lucide-react';
import { Button } from '../ui/button.tsx';

export function Topbtn() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<Button variant='outline' size='icon'>
			<ArrowUpToLine size={16} onClick={scrollToTop} />
		</Button>
	);
}
