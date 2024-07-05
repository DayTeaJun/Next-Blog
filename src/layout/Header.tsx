import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button.tsx';
import { Bookmark } from 'lucide-react';
import ThemeSwitch from './provider/ThemeSwitch.tsx';

function Header() {
	return (
		<header className=' fixed w-full flex items-center justify-center shadow-lg z-50 px-5 bg-white dark:bg-[#121212]'>
			<nav className=' flex flex-row w-full max-w-[900px] h-[80px] justify-between items-center z-50'>
				<div className='flex items-center text-xl font-bold'>
					<Link href='/'>Next - Blog</Link>
				</div>

				<div className='flex flex-row gap-5 items-center'>
					<Button asChild variant='ghost'>
						<Link href='/bookmark'>
							<Bookmark size={25} />
						</Link>
					</Button>
					<ThemeSwitch />
					<Link href='https://github.com/DayTeaJun/Next-Blog'>
						<FaGithub size={25} />
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
