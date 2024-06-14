import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bottom-0 w-full flex items-center justify-center pb-6">
      <nav className="flex flex-col w-full items-center gap-2">
        <Link href="https://github.com/DayTeaJun/">
          <FaGithub size={25} />
        </Link>

        <div className=" text-center text-sm">
          <span className=" font-bold">ⓒ DayTeaJun.</span>
          <br /> All Rights Reserved.
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
