'use client'

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';
import DashboardOverview from './DashboardOverview';
import MyProfile from './MyProfile';
import MyBookings from './MyBookings';
import DashboardSettings from './DashboardSettings';

const DashboardClient = ({ user, bookings }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <DashboardOverview user={user} bookings={bookings} />;
      case 'profile': return <MyProfile user={user} />;
      case 'bookings': return <MyBookings bookings={bookings} />;
      case 'settings': return <DashboardSettings />;
      default: return <DashboardOverview user={user} bookings={bookings} />;
    }
  };

  const tabTitles = {
    overview: 'Dashboard Overview',
    profile: 'My Profile',
    bookings: 'My Bookings',
    settings: 'Settings',
  };

  return (
    /* fixed inset-0  */
    <div className="fixed inset-0 bg-gray-50 dark:bg-[#060d1b] flex z-50">
      {/* Sidebar */}
      <DashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        isMobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex-shrink-0 bg-white/90 dark:bg-[#060d1b]/90 backdrop-blur-md border-b border-gray-100 dark:border-white/[0.06] px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Menu size={18} />
            </button>

            <div>
              <h1 className="text-gray-900 dark:text-white font-bold text-base sm:text-lg leading-tight">
                {tabTitles[activeTab]}
              </h1>
              <p className="text-gray-400 dark:text-slate-500 text-xs hidden sm:block">
                Welcome back, {user?.name?.split(' ')[0]}
              </p>
            </div>
          </div>

          {/* User info top right */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-gray-800 dark:text-slate-200 text-sm font-semibold">{user?.name}</span>
              <span className="text-gray-400 dark:text-slate-500 text-xs">{user?.email}</span>
            </div>
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-white/10"
              />
            ) : (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardClient;
