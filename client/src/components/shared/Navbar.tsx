'use client';
import { Eye, Link as LinkIcon, LogOut, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="relative flex items-center justify-between bg-white px-[2.4rem] py-[2.2rem]">
      <Logo />

      <div className="flex items-center gap-[1.6rem] tablet:gap-4">
        <Link
          href="/add-links"
          className={`flex items-center gap-[0.8rem] rounded-[0.8rem] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] mobile:px-[1.6rem] ${
            pathname === '/add-links'
              ? 'bg-light text-primary'
              : 'text-lightGray hover:text-primary'
          }`}
        >
          <LinkIcon />
          <p className="mobile:hidden">Links</p>
        </Link>
        <Link
          href="/profile"
          className={`flex items-center gap-[0.8rem] rounded-[0.8rem] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-primary mobile:px-[1.6rem] ${
            pathname === '/profile'
              ? 'bg-light text-primary'
              : 'text-lightGray hover:text-primary'
          }`}
        >
          <UserCircle />
          <p className="mobile:hidden">Profile Details</p>
        </Link>
      </div>

      <div className="flex items-center gap-8 tablet:gap-4">
        <button className="flex items-center gap-4 text-[1.6rem] text-lightGray transition-none hover:text-primary mobile:px-[1.6rem]">
          <LogOut size={'2rem'} />
          <span className="mobile:hidden">Logout</span>
        </button>
        <Link
          href={`/preview/${'123143'}`}
          className="rounded-[0.8rem] border border-solid border-primary px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-primary transition-all duration-300 hover:bg-light mobile:px-[1.6rem]"
        >
          <Eye size={'2rem'} className="hidden mobile:block" />
          <span className="mobile:hidden">Preview</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
