'use client'

import React from 'react';
import { CalendarCheck, Clock, BanknoteIcon, Activity, TrendingUp, Stethoscope } from 'lucide-react';
import { IconCurrencyTaka } from '@tabler/icons-react';

const StatCard = ({ icon: Icon, label, value, sub, color, gradient }) => (
  <div className={`relative overflow-hidden rounded-2xl p-5 ${gradient} border border-white/10`}>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
        <p className="text-white font-black text-3xl mt-1">{value}</p>
        {sub && <p className="text-white/50 text-xs mt-1">{sub}</p>}
      </div>
      <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center`}>
        <Icon size={22} className="text-white" />
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/5" />
    <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-white/[0.03]" />
  </div>
);

const DashboardOverview = ({ user, bookings }) => {
  const totalFee = bookings.reduce((sum, b) => sum + (parseInt(b.fee) || 0), 0);
  const upcoming = bookings.filter(b => {
    if (!b.appointmentDate) return false;
    return new Date(b.appointmentDate) >= new Date();
  }).length;

  const uniqueDoctors = [...new Set(bookings.map(b => b.doctorName).filter(Boolean))].length;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2942] border border-cyan-500/20 p-7 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">USER DASHBOARD</p>
          <h1 className="text-white font-black text-3xl md:text-4xl mt-2">
            Welcome back, {user?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-md">
            Here's an overview of your medical appointments and health consultations.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={CalendarCheck}
          label="Total Bookings"
          value={bookings.length}
          sub="All time"
          gradient="bg-gradient-to-br from-cyan-600 to-cyan-800"
        />
        <StatCard
          icon={Clock}
          label="Upcoming"
          value={upcoming}
          sub="Scheduled"
          gradient="bg-gradient-to-br from-blue-600 to-blue-800"
        />
        <StatCard
          icon={Stethoscope}
          label="Doctors Visited"
          value={uniqueDoctors}
          sub="Unique specialists"
          gradient="bg-gradient-to-br from-violet-600 to-violet-800"
        />
        <StatCard
          icon={IconCurrencyTaka}
          label="Total Spent"
          value={`৳${totalFee.toLocaleString()}`}
          sub="Consultation fees"
          gradient="bg-gradient-to-br from-emerald-600 to-emerald-800"
        />
      </div>

      {/* Recent Bookings */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-100 dark:border-white/[0.06] shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-white/[0.06] flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 dark:text-white font-bold text-lg">Recent Bookings</h2>
            <p className="text-gray-500 text-xs mt-0.5">Your last {Math.min(bookings.length, 4)} appointments</p>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-cyan-500" />
            <span className="text-cyan-500 text-sm font-semibold">{bookings.length} total</span>
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="py-16 text-center">
            <CalendarCheck size={40} className="text-gray-300 dark:text-slate-700 mx-auto mb-3" />
            <p className="text-gray-400 dark:text-slate-500 text-sm">No appointments yet</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50 dark:divide-white/[0.04]">
            {bookings.slice(0, 4).map((booking, i) => (
              <div key={booking._id || i} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                    <Stethoscope size={18} className="text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">{booking.doctorName}</p>
                    <p className="text-gray-400 text-xs">{booking.specialty || 'General'} · {booking.appointmentDate || '—'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 dark:text-white font-bold text-sm flex items-center gap-0.5 justify-end">
                    <span className="text-gray-400 text-xs">৳</span>
                    {parseInt(booking.fee || 0).toLocaleString()}
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                    Confirmed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;
