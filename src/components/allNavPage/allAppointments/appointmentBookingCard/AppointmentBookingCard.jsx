'use client'
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { DateField, Label } from '@heroui/react';
import { 
  IconCurrencyTaka, 
  IconCalendarEvent, 
  IconClock, 
  IconArrowRight,
  IconCalendarCheck
} from '@tabler/icons-react';

const AppointmentBookingCard = ({ detailsData }) => {
  const { _id, doctorName, specialty, fee, appointmentDate, appointmentTime } = detailsData;
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [date, setDate] = useState(null);
  const router = useRouter();

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please log in first!");
      return;
    }
    if (!date) {
      toast.error("Please select a new date!");
      return;
    }

    try {
      const parsedDate = date.toDate ? date.toDate("UTC") : new Date(date);

      const bookingData = {
        userId: user.id,
        userImage: user.image || "",
        userName: user.name,
        detailsDataId: _id,
        doctorName,
        fee,
        specialty,
        date: parsedDate
      };
      
      const {data: tokenData} = await authClient.token()
    if (!tokenData?.token) {
      toast.error('Authentication token missing. Please login again.');
      return;
    }
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData)
      });

      if (res.ok) {
        toast.success('Your Booking is Successful!');
        router.push('/allNav/dashboard');
      } else {
        toast.error('Something went wrong on the server');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to process booking date.');
    }
  };

  return (
    <div className="group relative bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/40 border-2 border-blue-100/70 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/50 dark:border-blue-950/50 rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40 space-y-6 pt-8 overflow-hidden">
      
      {/* Background Neon Blur Glow */}
      <div className="absolute -right-20 -top-20 w-44 h-44 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-44 h-44 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Fee Information */}
      <div className="space-y-1 relative z-10">
        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Appointment Fee
        </p>
        <div className="flex items-baseline gap-1">
          <IconCurrencyTaka size={32} className="text-blue-600 dark:text-blue-500 transform group-hover:scale-110 transition-transform duration-300" stroke={2.5} />
          <span className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            {fee ? parseInt(fee).toLocaleString() : "TBD"}
          </span>
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 ml-1">/ per visit</span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200/80 to-transparent dark:via-neutral-800/80" />

      {/* Scheduling Details */}
      <div className="space-y-3 text-sm relative z-10">
        <div className="flex items-center justify-between bg-white/90 dark:bg-neutral-800/60 border border-gray-100 dark:border-neutral-800/40 px-4 py-3 rounded-2xl shadow-sm shadow-gray-100/10">
          <div className="flex items-center gap-2.5 text-gray-500 dark:text-gray-400">
            <IconCalendarEvent size={18} className="text-blue-500" />
            <span className="font-medium">Current Date:</span>
          </div>
          <span className="font-extrabold text-gray-900 dark:text-white">{appointmentDate || "Pending"}</span>
        </div>

        <div className="flex items-center justify-between bg-white/90 dark:bg-neutral-800/60 border border-gray-100 dark:border-neutral-800/40 px-4 py-3 rounded-2xl shadow-sm shadow-gray-100/10">
          <div className="flex items-center gap-2.5 text-gray-500 dark:text-gray-400">
            <IconClock size={18} className="text-emerald-500" />
            <span className="font-medium">Current Time:</span>
          </div>
          <span className="font-extrabold text-gray-900 dark:text-white">{appointmentTime || "Pending"}</span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200/80 to-transparent dark:via-neutral-800/80" />

      {/* Reschedule Input and Button */}
      <div className="space-y-5 relative z-10">
        
        {/* HeroUI DateField Wrapper Custom Styling */}
        <div className="w-full bg-white/90 dark:bg-neutral-800/60 border border-gray-100 dark:border-neutral-800/40 p-4 rounded-2xl shadow-sm">
          <DateField 
            className="w-full" 
            name="date" 
            onChange={setDate}
          >
            <Label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
              Select New Date
            </Label>
            <DateField.Group className="border-2 border-gray-200/60 dark:border-neutral-700/60 focus-within:border-blue-500 dark:focus-within:border-blue-500 rounded-xl px-3 py-2 transition-all duration-200 bg-white dark:bg-neutral-900">
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} className="focus:bg-blue-100 dark:focus:bg-blue-950/70 focus:text-blue-600 rounded px-0.5" />}
              </DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        <button
          onClick={handleBooking}
          className="w-full inline-flex cursor-pointer items-center justify-center gap-2 bg-gray-900 dark:bg-neutral-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/20 group/btn"
        >
          <IconCalendarCheck size={18} className="transition-transform duration-300 group-hover/btn:scale-110" />
          <span>Schedule Appointment</span>
          <IconArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>

        <p className="text-center text-[11px] text-gray-400 dark:text-gray-500 font-medium">
          * Secure scheduling handled via verified hospital gateway.
        </p>
      </div>

    </div>
  );
};

export default AppointmentBookingCard;