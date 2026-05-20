import React from 'react';
import { 
  IconStethoscope, 
  IconUser, 
  IconPhone, 
  IconClock, 
  IconTag, 
  IconHospital,
  IconStarFilled,
  IconBriefcase,
  IconGenderTransgender,
  IconShieldCheck
} from '@tabler/icons-react';
import Delete from '@/components/allNavPage/allAppointments/delete/Delete';
import AppointmentEditModal from '@/components/allNavPage/allAppointments/appointmentEditModal/AppointmentEditModal';
import AppointmentBookingCard from '@/components/allNavPage/allAppointments/appointmentBookingCard/AppointmentBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const AppointmentDetails = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    return (
      <div className='flex justify-center items-center min-h-screen px-4'>
        <div className="p-6 md:p-8 text-center bg-red-50/60 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 rounded-3xl max-w-md shadow-xl backdrop-blur-md w-full">
          <p className='text-red-500 dark:text-red-400 font-bold text-lg mb-2'>
            Data Fetch Failed
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Failed to fetch appointment details. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  const detailsData = await res.json();
  const {
    appointmentTime,
    specialty,
    experience,
    hospital,
    phoneNumber,
    gender,
    patientName,
    doctorName,
    appointmentDate
  } = detailsData;

  const mockRating = 4.9;
  const mockReviewCount = 248;

  return (
    <div className="w-full overflow-x-hidden mt-20">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative'>

        {/* Background Glow */}
        <div className="absolute top-10 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 relative z-10'>

          {/* LEFT */}
          <div className='lg:col-span-2 space-y-8 md:space-y-10'>

            {/* HEADER */}
            <div className='rounded-2xl md:rounded-[32px] p-5 md:p-8 bg-gradient-to-br from-blue-50/60 to-indigo-50/20 dark:from-neutral-900 dark:to-neutral-950 border border-blue-100 dark:border-neutral-800 shadow-md'>
              
              <div className='flex flex-wrap items-center gap-2 text-blue-600 mb-4'>
                <IconHospital size={16} />
                <span className='text-xs font-bold uppercase tracking-widest'>
                  {hospital || "General Hospital"}
                </span>
              </div>

              <h1 className='text-xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug'>
                Appointment with{' '}
                <span className='text-blue-600 dark:text-blue-400'>
                  {doctorName || "Dr. Unknown"}
                </span>
              </h1>

              <div className='flex flex-wrap gap-3 mt-5 text-sm'>
                <div className='flex items-center gap-1 text-amber-500 font-semibold'>
                  <IconStarFilled size={14} />
                  {mockRating} ({mockReviewCount}+)
                </div>

                <div className='flex items-center gap-1 text-gray-600 dark:text-gray-300'>
                  <IconClock size={16} />
                  {appointmentTime || "N/A"}
                </div>

                {specialty && (
                  <span className='bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold'>
                    {specialty}
                  </span>
                )}
              </div>
            </div>

            {/* OVERVIEW */}
            <div className='bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl md:rounded-[32px] p-5 md:p-8 shadow-sm'>
              <h2 className='text-lg md:text-2xl font-bold mb-4 flex items-center gap-2'>
                <IconTag size={20} />
                Overview
              </h2>

              <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed'>
                Patient <b>{patientName}</b> has an appointment on{' '}
                <b>{appointmentDate}</b> at <b>{appointmentTime}</b>.
              </p>
            </div>

            {/* DETAILS */}
            <div className='bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl md:rounded-[32px] p-5 md:p-8'>
              <h2 className='text-lg md:text-2xl font-bold mb-6 flex items-center gap-2'>
                <IconStethoscope size={20} />
                Details
              </h2>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                {[
                  { icon: IconUser, label: "Patient", value: patientName },
                  { icon: IconUser, label: "Doctor", value: doctorName },
                  { icon: IconPhone, label: "Phone", value: phoneNumber },
                  { icon: IconHospital, label: "Hospital", value: hospital },
                  { icon: IconBriefcase, label: "Experience", value: experience },
                  { icon: IconGenderTransgender, label: "Gender", value: gender }
                ].map((item, i) => (
                  <div
                    key={i}
                    className='flex items-center shadow-md gap-3 p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700'
                  >
                    <item.icon size={18} />
                    <div className='min-w-0'>
                      <p className='text-xs text-green-400 font-bold uppercase'>{item.label}</p>
                      <p className='text-sm font-semibold truncate'>
                        {item.value || "N/A"}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className='lg:col-span-1 space-y-6'>
            <div className='lg:sticky lg:top-24 space-y-6'>

              <AppointmentBookingCard detailsData={detailsData} />

              <div className='flex items-center justify-between p-4 rounded-2xl bg-slate-900 text-white'>
                <p className='text-sm font-semibold'>Admin Controls</p>
                <div className='flex gap-2'>
                  <AppointmentEditModal detailsData={detailsData} />
                  <Delete detailsData={detailsData} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;