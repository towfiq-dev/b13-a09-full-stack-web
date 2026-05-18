'use client'
import React, { useState } from 'react';
import { IconCurrencyTaka } from '@tabler/icons-react';
import { DateField, Label } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const AppointmentBookingCard = ({ detailsData }) => {
  const { _id, doctorName, image, specialty, fee, appointmentDate, appointmentTime } = detailsData;
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [date, setDate] = useState(null);
  const router = useRouter()
  const handleBooking = async () => {

    if (!user) {
      toast.error("Please log in first!");
      return;
    }
    if (!date) {
      toast.error("Please select a new date!");
      return;
    }

    const bookingData = {
      userId: user.id,
      userImage: user.image || "",
      userName: user.name,
      detailsDataId: _id,
      doctorName,
      fee,
      specialty,
      date: new Date(date)
    };

    console.log("Booking Data Successful:", bookingData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`,{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingData)
      
    })
    const data = await res.json()
    if (data) {
          toast.success('Your Booking is SuccessFully')
          router.push('/allNav/dashboard')
        }else{
          toast.error('Something went wrong')
        }
  };

  return (
    <div className='p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-xl shadow-blue-500/5 space-y-6'>

      {/* Fee Information */}
      <div className='space-y-1'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>Appointment Fee</p>
        <div className='flex items-baseline gap-1.5'>
          <IconCurrencyTaka size={24} className='text-blue-600' stroke={2.5} />
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

      {/* Reschedule Input and Button */}
      <div className='space-y-5'>

        <div className="w-full">

          <DateField className="w-[256px]" name="date" onChange={setDate}>
            <Label>Select New Date</Label>
            <DateField.Group>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        <button
          onClick={handleBooking}
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