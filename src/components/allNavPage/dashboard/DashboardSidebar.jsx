'use client'

import React from 'react';
import { LayoutDashboard, User, CalendarCheck, Settings, LogOut, ChevronRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const navItems = [
  { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'profile', label: 'My Profile', icon: User },
  { id: 'bookings', label: 'My Bookings', icon: CalendarCheck },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const DashboardSidebar = ({ activeTab, setActiveTab, user, isMobileOpen, setMobileOpen }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/');
  };

  const handleNav = (id) => {
    setActiveTab(id);
    if (setMobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-40
          bg-[#0f172a] flex flex-col
          transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:z-auto
          shadow-2xl shadow-black/50
        `}
      >
        {/* Logo / Brand */}
        <div className="px-6 pt-8 pb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">MediCare</p>
              <p className="text-slate-500 text-xs">User Dashboard</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="px-5 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-11 h-11 rounded-2xl object-cover ring-2 ring-cyan-500/30"
              />
            ) : (
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm truncate">{user?.name || 'User'}</p>
              <p className="text-slate-500 text-xs truncate">{user?.email || ''}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest px-3 mb-3">Navigation</p>
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-200 group relative cursor-pointer
                  ${isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/10 text-cyan-400 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }
                `}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-cyan-400 rounded-full" />
                )}
                <Icon size={18} className={isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'} />
                <span className="flex-1 text-left">{label}</span>
                {isActive && <ChevronRight size={14} className="text-cyan-400" />}
              </button>
            );
          })}
        </nav>

        {/* Sign Out */}
        <div className="px-3 pb-6 border-t border-white/[0.06] pt-4">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 cursor-pointer"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
