'use client'

import React, { useState } from 'react';
import { CalendarCheck, Stethoscope, Eye, Search } from 'lucide-react';
import { IconCalendar, IconClock } from '@tabler/icons-react';
import Link from 'next/link';
import BookingDelete from './BookingDelete';
import BookingUpdateModal from './BookingUpdateModal';

const MyBookings = ({ bookings }) => {
  const [search, setSearch] = useState('');

  const filtered = bookings.filter(b =>
    b.doctorName?.toLowerCase().includes(search.toLowerCase()) ||
    b.specialty?.toLowerCase().includes(search.toLowerCase()) ||
    b.userName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-gray-900 dark:text-white font-black text-2xl">My Bookings</h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">
            {bookings.length} total appointment{bookings.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 dark:bg-cyan-500/10 border border-blue-100 dark:border-cyan-500/20 px-4 py-2 rounded-xl">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold">
            {bookings.length} Booking{bookings.length !== 1 ? 's' : ''} Found
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by doctor, specialty or patient name..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all"
        />
      </div>

      {/* Booking Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-gray-200 dark:border-white/[0.06] rounded-2xl">
          <CalendarCheck size={44} className="text-gray-300 dark:text-slate-700 mx-auto mb-4" />
          <p className="text-gray-400 dark:text-slate-500 font-medium">
            {search ? 'No matching bookings found' : 'No appointments yet'}
          </p>
          {search && (
            <button
              onClick={() => setSearch('')}
              className="text-cyan-500 text-sm mt-2 hover:underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filtered.map((booking, index) => (
            <div
              key={booking._id || index}
              className="group relative bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/[0.06] rounded-2xl shadow-sm hover:shadow-md dark:hover:shadow-black/30 hover:border-cyan-200 dark:hover:border-cyan-500/20 transition-all duration-300 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-2xl" />

              <div className="pl-5 pr-5 py-5 flex flex-col md:flex-row md:items-center gap-5">

                {/* Doctor / Patient Info */}
                <div className="flex items-start gap-4 flex-1">
                  {booking.userImage ? (
                    <img
                      src={booking.userImage}
                      alt={booking.userName}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-white/10 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Stethoscope size={20} className="text-white" />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <span className="inline-block px-2 py-0.5 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-wider rounded-md mb-1">
                      {booking.specialty || 'General'}
                    </span>
                    <h3 className="text-gray-900 dark:text-white font-bold text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {booking.doctorName}
                    </h3>
                    <p className="text-gray-500 dark:text-slate-500 text-sm flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      Patient:{' '}
                      <span className="font-medium text-gray-700 dark:text-slate-300">
                        {booking.userName}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex flex-wrap items-center gap-3 text-sm md:border-l md:border-gray-100 dark:border-white/[0.06] md:pl-5">
                  <div className="flex items-center gap-2 bg-gray-50 dark:bg-white/[0.04] px-3 py-2 rounded-xl">
                    <IconCalendar size={15} className="text-gray-400" />
                    <span className="font-semibold text-gray-700 dark:text-slate-300 text-xs">
                      {booking.appointmentDate || 'TBD'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 dark:bg-white/[0.04] px-3 py-2 rounded-xl">
                    <IconClock size={15} className="text-gray-400" />
                    <span className="font-semibold text-gray-700 dark:text-slate-300 text-xs">
                      {booking.appointmentTime || 'TBD'}
                    </span>
                  </div>
                </div>

                {/* Fee & Actions */}
                <div className="flex items-center justify-between md:justify-end gap-5 md:border-l md:border-gray-100 dark:border-white/[0.06] md:pl-5">
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-wider font-bold">Fee</p>
                    <div className="flex items-center text-gray-900 dark:text-white font-black text-xl mt-0.5">
                      <span className="text-gray-400 text-sm mr-0.5">৳</span>
                      {parseInt(booking.fee || 0).toLocaleString()}
                    </div>
                  </div>

                  {/* View | Update | Cancel */}
                  <div className="flex items-center gap-2">
                    {/* View */}
                    <Link
                      href={`/allNav/allAppointments/${booking.detailsDataId || booking._id}`}
                      className="flex items-center gap-1.5 bg-gray-50 dark:bg-white/[0.04] hover:bg-cyan-600 dark:hover:bg-cyan-600 text-gray-700 dark:text-slate-300 hover:text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all duration-200 border border-gray-200/60 dark:border-white/[0.06] hover:border-cyan-600"
                    >
                      <Eye size={14} />
                      View
                    </Link>

                    {/* Update */}
                    <BookingUpdateModal booking={booking} />

                    {/* Cancel */}
                    <BookingDelete booking={booking} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
