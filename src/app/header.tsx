'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 py-2 h-16 bg-bgColor z-50">
      <div className="flex justify-end space-x-8 text-slate-500 mt-2 mx-32">
        <div className="mr-auto">
        <Link href="/" className="text-mainColor font-bold text-4xl border-2 border-white rounded-full px-4 py-1 
              transition-colors duration-300 ease-in-out fill-current hover:bg-hoverColor">
          SK
        </Link>
        </div>
        <Link href="/" className={`underline decoration-2 underline-offset-4 transition-colors duration-300 ease-in-out fill-current hover:text-mainColor ${pathname === '/' ? 'text-mainColor' : ''}`}>
          Home
        </Link>
        <Link href="./projects" className={`underline decoration-2 underline-offset-4 transition-colors duration-300 ease-in-out fill-current hover:text-mainColor ${pathname === '/projects' ? 'text-mainColor' : ''}`}>
          Projects
        </Link>
        <Link href="./about" className={`underline decoration-2 underline-offset-4 transition-colors duration-300 ease-in-out fill-current hover:text-mainColor ${pathname === '/about' ? 'text-mainColor' : ''}`}>
          About Me
        </Link>
        <Link href="./resume" className={`underline decoration-2 underline-offset-4 transition-colors duration-300 ease-in-out fill-current hover:text-mainColor ${pathname === '/resume' ? 'text-mainColor' : ''}`}>
          Resume
        </Link>
      </div>
    </header>
  );
}
