'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ children, href, className = "" }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li className="list-none w-full lg:w-auto">
      <Link
        href={href}
        className={`relative flex items-center gap-2 px-3 py-2.5 lg:px-3 lg:py-1.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 group
          ${isActive
            ? 'text-cyan-600 bg-cyan-50 lg:bg-transparent lg:text-cyan-600'
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent'
          }
          ${className}`}
      >
        {/* Active dot indicator for mobile */}
        <span className={`lg:hidden w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200
          ${isActive ? 'bg-cyan-500' : 'bg-transparent'}`}
        />

        {children}

        {/* Desktop underline animation */}
        <span className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-300 origin-left hidden lg:block
          ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
        />
      </Link>
    </li>
  );
};

export default NavLink;
