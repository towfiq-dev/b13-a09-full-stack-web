'use client';

import React, { useState } from 'react';
import AppointmentsCard from '../appointmentsCard/AppointmentsCard';
import { IconSearch, IconX, IconStethoscope } from '@tabler/icons-react';

const AppointmentClient = ({ allAppointments }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAppointments = allAppointments.filter((appointment) =>
    appointment.doctorName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-10">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-blue-500/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

        <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-2 border-blue-100/80 dark:border-blue-950/60 rounded-2xl shadow-xl shadow-blue-500/[0.07] dark:shadow-black/30 overflow-hidden transition-all duration-300 focus-within:border-blue-400/70 dark:focus-within:border-blue-600/60 focus-within:shadow-blue-500/[0.15]">
          <div className="flex items-center px-5 py-1.5 gap-4">
            {/* Search Icon */}
            <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500 shadow-md shadow-blue-500/30">
              <IconSearch size={18} stroke={2.5} className="text-white" />
            </div>

            {/* Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name..."
              className="flex-1 py-3.5 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-base font-medium outline-none"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-400 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-950/40 dark:hover:text-red-400 transition-all duration-200"
              >
                <IconX size={16} stroke={2.5} />
              </button>
            )}

            
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredAppointments.length === 0 ? (
        <div className="text-center py-20 bg-gray-50/50 dark:bg-neutral-900/20 border border-dashed border-gray-200 dark:border-neutral-800 rounded-3xl">
          <IconStethoscope size={40} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500 dark:text-gray-400 font-semibold text-base">
            No doctor found for &quot;<span className="text-blue-500">{searchQuery}</span>&quot;
          </p>
          <p className="text-sm text-gray-400 mt-1">Try a different name or clear the search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAppointments.map((appointment) => (
            <div key={appointment._id}>
              <AppointmentsCard appointment={appointment} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentClient;