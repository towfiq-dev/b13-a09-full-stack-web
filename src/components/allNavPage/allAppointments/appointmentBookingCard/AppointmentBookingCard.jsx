import React from 'react';
import { IconCurrencyTaka } from '@tabler/icons-react';

const AppointmentBookingCard = ({ fee, appointmentDate, appointmentTime }) => {
  return (
    <div className='p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-xl shadow-blue-500/5 space-y-6'>
        
      {/* Fee Information */}
      <div className='space-y-1'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>Appointment Fee</p>
        <div className='flex items-baseline gap-1.5'>
          <IconCurrencyTaka size={24} className='text-blue-600' stroke={2.5}/>
          <span className='text-4xl font-extrabold text-gray-900 dark:text-white'>
            {fee ? parseInt(fee).toLocaleString() : "TBD"}
          </span>
          <span className='text-sm text-gray-500 dark:text-gray-400'>/ visit</span>
        </div>
      </div>
      
      <div className='h-[1px] w-full bg-gray-100 dark:bg-neutral-800' />
      
      {/* Scheduling Details */}
      <div className='space-y-4 text-sm'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-500 dark:text-gray-400'>Current Date:</span>
          <span className='font-semibold text-gray-800 dark:text-white'>{appointmentDate || "Pending"}</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-gray-500 dark:text-gray-400'>Current Time:</span>
          <span className='font-semibold text-gray-800 dark:text-white'>{appointmentTime || "Pending"}</span>
        </div>
      </div>
      
      <div className='h-[1px] w-full bg-gray-100 dark:bg-neutral-800' />
      
      {/* Native Reschedule Input and Button */}
      <div className='space-y-5'>
        <div className="space-y-2">
          <label className="block text-sm text-gray-600 dark:text-gray-300 font-medium">
            Select New Date (Optional)
          </label>
          <input
            type="date"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        
        <button 
          className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10'
        >
          <span>Reschedule Appointment</span>
          <span className='text-lg'>→</span>
        </button>
        
        <p className='text-center text-xs text-gray-400 pt-1'>* Booking system functionality not active yet.</p>
      </div>

    </div>
  );
};

export default AppointmentBookingCard;