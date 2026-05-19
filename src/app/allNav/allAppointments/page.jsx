import AppointmentClient from '@/components/allNavPage/allAppointments/AppointmentClient/AppointmentClient';
import { getAppointments } from '@/lib/data-fetch';
import React from 'react';
import { IconStethoscope, IconCalendarCheck } from '@tabler/icons-react';

export const metadata = {
  title: "All Appointments — Browse Specialist Doctors | DocBook",
  description: "Explore all available doctor appointments. Search by doctor name, specialty, hospital, and book your slot instantly.",
  keywords: ["all appointments", "find doctor", "specialist doctors", "book appointment"],
  openGraph: {
    title: "All Appointments — Browse Specialist Doctors | DocBook",
    description: "Find and book the right doctor for your health needs.",
    url: "https://yourdomain.com/allNav/allAppointments",
    type: "website",
  },
};

const AllAppointment = async () => {
  const allAppointments = await getAppointments() || [];

  return (
    <div className='mt-25 max-w-7xl mx-auto px-4 py-10 md:py-16 relative min-h-screen'>
      
      {/* Background Decorative Soft Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/[0.03] dark:bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-indigo-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 border-b border-gray-100 dark:border-neutral-800/60 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full border border-blue-100/30">
            Available Slots
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mt-3 mb-2 tracking-tight">
            Book Your Specialist
          </h1>
          <p className="text-base text-gray-400 dark:text-gray-500 max-w-xl font-medium">
            Browse through our verified medical professionals and choose the perfect schedule for your health checkup.
          </p>
        </div>

        {/* Live Status Counter Box */}
        <div className="flex items-center gap-4 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/20 dark:from-neutral-900 dark:to-neutral-950/40 border-2 border-blue-100/60 dark:border-blue-950/40 p-4 rounded-2xl shadow-lg shadow-slate-100/50 dark:shadow-black/20 shrink-0">
          <div className="p-3 bg-blue-500 text-white rounded-xl shadow-md shadow-blue-500/20">
            <IconCalendarCheck size={24} stroke={2} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Total Experts</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-3xl font-black text-gray-950 dark:text-white tracking-tight">
                {allAppointments.length}
              </span>
              <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Client Section */}
      <div className="relative z-10">
        {allAppointments.length === 0 ? (
          <div className="text-center py-20 bg-gray-50/50 dark:bg-neutral-900/20 border border-dashed border-gray-200 dark:border-neutral-800 rounded-3xl">
            <IconStethoscope size={40} className="mx-auto text-gray-300 mb-3 animate-pulse" />
            <p className="text-gray-500 dark:text-gray-400 font-semibold">No active appointments found at this moment.</p>
          </div>
        ) : (
          <AppointmentClient allAppointments={allAppointments} />
        )}
      </div>

    </div>
  );
};

export default AllAppointment;