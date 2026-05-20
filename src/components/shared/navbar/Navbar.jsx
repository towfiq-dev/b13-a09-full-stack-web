'use client'

import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Logo from '@/assets/images/docLogo.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Navbar = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleSignOut = async () => {
    await authClient.signOut()
    router.refresh()
    router.push('/auth/signin')
    toast.success('SignOut Successfully')
  }

  const links = (
    <>
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/allNav/allAppointments'}>All Appointments</NavLink>
      <NavLink href={'/allNav/appointment'}>Appointments</NavLink>
      <NavLink href={'/allNav/dashboard'}>Dashboard</NavLink>
    </>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,180,216,0.10)] py-2'
          : 'bg-white/60 backdrop-blur-md py-3 lg:py-4'
        }`}
        style={{ borderBottom: isScrolled ? '1.5px solid rgba(0,180,216,0.10)' : '1.5px solid transparent' }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center'>

          {/* Logo */}
          <Link href="/" className="shrink-0 group">
            <Image
              src={Logo}
              alt='Logo'
              width={160}
              height={50}
              priority
              className='w-24 sm:w-28 md:w-36 h-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.04]'
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className='hidden lg:flex items-center gap-1 xl:gap-2'>
            {links}
          </ul>

          {/* Desktop Right Side */}
          <div className='hidden lg:flex items-center gap-3'>
            {user ? (
              <>
                <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-2xl px-3 py-1.5">
                  <Image
                    width={36}
                    height={36}
                    src={user.image}
                    alt={user.name}
                    className='w-9 h-9 rounded-full border-2 border-cyan-400 object-cover shadow-sm'
                  />
                  <span className="text-sm font-semibold text-gray-700 max-w-[110px] truncate">{user.name}</span>
                </div>
                <Button
                  color='danger'
                  variant='flat'
                  onClick={handleSignOut}
                  className='bg-gradient-to-r from-red-500 to-rose-500 text-white px-5 py-2 font-semibold rounded-xl shadow-sm shadow-red-100 hover:shadow-md hover:shadow-red-200 active:scale-[0.96] transition-all duration-200 border-0'
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href={'/auth/signin'}>
                  <Button
                    variant={pathname === '/auth/signin' ? 'solid' : 'light'}
                    className={`rounded-xl px-5 font-semibold transition-all duration-200 active:scale-[0.96] ${
                      pathname === '/auth/signin'
                        ? 'bg-[#00B4D8] text-white shadow-md shadow-cyan-100'
                        : 'text-gray-600 hover:bg-cyan-50 hover:text-cyan-600'
                    }`}
                  >
                    Login
                  </Button>
                </Link>
                <Link href={'/auth/signup'}>
                  <Button
                    variant={pathname === '/auth/signup' ? 'solid' : 'light'}
                    className={`rounded-xl px-5 font-semibold transition-all duration-200 active:scale-[0.96] ${
                      pathname === '/auth/signup'
                        ? 'bg-[#00B4D8] text-white shadow-md shadow-cyan-100'
                        : 'bg-gradient-to-r from-[#00B4D8] to-[#0096c7] text-white shadow-sm shadow-cyan-100 hover:shadow-md hover:shadow-cyan-200'
                    }`}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className='lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 focus:outline-none transition-all duration-200 active:scale-95'
          >
            <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
              <X size={22} />
            </span>
            <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
              <Menu size={22} />
            </span>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden fixed inset-0 top-[60px] z-40 transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Drawer Panel */}
          <div
            className={`absolute top-0 left-0 right-0 bg-white shadow-2xl rounded-b-3xl overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-[90vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}
          >
            <div className="overflow-y-auto max-h-[calc(90vh-60px)] px-5 py-6 space-y-5">

              {/* Nav Links */}
              <div className="bg-gray-50 rounded-2xl p-3">
                <ul className='flex flex-col gap-1'>
                  {links}
                </ul>
              </div>

              {/* Auth Section */}
              {user ? (
                <div className='flex flex-col gap-3 pt-1'>
                  <div className='flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-100 rounded-2xl p-3'>
                    <Avatar
                      src={user?.image}
                      name={user?.name}
                      className="w-11 h-11 flex-shrink-0 border-2 border-cyan-300"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className='font-bold text-gray-900 truncate text-sm'>{user?.name}</h3>
                      <p className='text-xs text-gray-500 truncate mt-0.5'>{user?.email}</p>
                    </div>
                  </div>
                  <Button
                    color='danger'
                    variant='solid'
                    onClick={handleSignOut}
                    className="w-full bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold py-3 rounded-xl active:scale-[0.97] transition-all duration-150 shadow-sm"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className='flex flex-col gap-3 pt-1'>
                  <Link href={'/auth/signin'} className="w-full">
                    <Button
                      variant={pathname === '/auth/signin' ? 'solid' : 'light'}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-150 active:scale-[0.97] ${
                        pathname === '/auth/signin'
                          ? 'bg-[#00B4D8] text-white'
                          : 'border-2 border-gray-200 text-gray-700 hover:border-cyan-200 hover:text-cyan-600'
                      }`}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href={'/auth/signup'} className="w-full">
                    <Button
                      variant={pathname === '/auth/signup' ? 'solid' : 'light'}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-150 active:scale-[0.97] ${
                        pathname === '/auth/signup'
                          ? 'bg-[#00B4D8] text-white'
                          : 'bg-gradient-to-r from-[#00B4D8] to-[#0096c7] text-white shadow-sm'
                      }`}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="h-[60px] lg:h-[72px]" />
    </>
  );
};

export default Navbar;
