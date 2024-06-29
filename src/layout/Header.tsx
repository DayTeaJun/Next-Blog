import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ThemeSwitch from './provider/ThemeSwitch.tsx';

function Header() {
	return (
		<header className=' fixed w-full flex items-center justify-center border-b shadow-lg z-50  bg-inherit px-5'>
			<nav className=' flex flex-row w-full max-w-[900px] h-[80px] justify-between items-center'>
				<div className='flex items-center text-lg font-medium'>
					<Link href='/'>Next - Blog</Link>
				</div>

				<div className='flex flex-row gap-5 items-center'>
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
