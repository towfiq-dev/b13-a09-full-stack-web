import React from 'react';
import { IconStethoscope, IconUser, IconPhone, IconClock, IconTag, IconHospital } from '@tabler/icons-react';
import Delete from '@/components/allNavPage/allAppointments/delete/Delete';
import AppointmentEditModal from '@/components/allNavPage/allAppointments/appointmentEditModal/AppointmentEditModal';
import AppointmentBookingCard from '@/components/allNavPage/allAppointments/appointmentBookingCard/AppointmentBookingCard';

const AppointmentDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`);
  
  if (!res.ok) {
    return (
      <div className='flex justify-center items-center min-h-[50vh] mt-25'>
        <p className='text-red-500 font-semibold'>
          Failed to fetch appointment details. Please try again.
        </p>
      </div>
    );
  }

  const detailsData = await res.json();
  const {
    _id,
    appointmentTime,
    specialty,
    experience,
    availability,
    hospital,
    fee,
    appointmentDate,
    phoneNumber,
    gender,
    patientName,
    doctorName,
    userEmail
  } = detailsData;

  const mockRating = 4.8;
  const mockReviewCount = 195;

  return (
    <div className='mt-25 max-w-7xl mx-auto px-4 py-10 md:py-16'>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Left Side (Content) */}
        <div className='md:col-span-2'>
          
          {/* Header Info */}
          <div className='mb-6'>
            <div className='flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1.5'>
              <IconHospital size={16} />
              <span className='text-xs font-semibold uppercase tracking-wider'>{hospital || "General Hospital"}</span>
            </div>
            
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Appointment with {doctorName || "Dr. Unknown"}
            </h1>
            
            {/* Meta Info Row */}
            <div className='flex flex-wrap items-center gap-5 text-sm'>
              <div className='flex items-center gap-1.5'>
                <span className="text-amber-500 text-base">★</span>
                <span className='font-semibold text-gray-900 dark:text-white'>{mockRating}</span>
                <span className='text-gray-500 dark:text-gray-400'>({mockReviewCount} reviews)</span>
              </div>
              <div className='flex items-center gap-1.5 text-gray-600 dark:text-gray-300'>
                <IconClock size={16} className='text-blue-500' />
                <span>{appointmentTime || "Not Scheduled"}</span>
              </div>
              {specialty && (
                <div className='bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-full font-medium'>
                  {specialty}
                </div>
              )}
            </div>
          </div>
          
          <div className='my-8 h-[1px] w-full bg-gray-200 dark:bg-neutral-800' />
          
          {/* Appointment Overview Section */}
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2.5'>
              <IconTag className='text-blue-600' />
              Appointment Overview
            </h2>
            <div className='space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed'>
              <p>
                Patient <strong className='text-gray-900 dark:text-white'>{patientName || "Unknown Patient"}</strong> has an 
                appointment scheduled for <strong className='text-gray-900 dark:text-white'>{appointmentDate || "a later date"}</strong> 
                at {appointmentTime || "to be determined"}. The visit will take place at {hospital || "their preferred facility"}.
              </p>
              
              <p className='border-l-4 border-blue-200 dark:border-blue-900 pl-5 italic text-gray-600 dark:text-gray-400'>
                Ensure both doctor and patient confirm availability. The medical facility provides necessary equipment and assistance.
              </p>
            </div>
          </section>
          
          {/* Key Details Section */}
          <section>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5'>
               <IconStethoscope className='text-blue-600' />
              Appointment Key Details
            </h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'>
              
              <div className='flex items-start gap-3'>
                <div className='p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-blue-600'><IconUser size={18} stroke={2}/></div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Patient Name</p>
                  <p className='font-semibold text-gray-900 dark:text-white'>{patientName}</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                 <div className='p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-blue-600'><IconUser size={18} stroke={2}/></div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Doctor Name</p>
                  <p className='font-semibold text-gray-900 dark:text-white'>{doctorName}</p>
                </div>
              </div>
              
               <div className='flex items-start gap-3'>
                <div className='p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-blue-600'><IconPhone size={18} stroke={2}/></div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Patient Contact</p>
                  <p className='font-semibold text-gray-900 dark:text-white'>{phoneNumber || "N/A"}</p>
                </div>
              </div>
              
              <div className='flex items-start gap-3'>
                <div className='p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-blue-600'><IconHospital size={18} stroke={2}/></div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Medical Facility</p>
                  <p className='font-semibold text-gray-900 dark:text-white'>{hospital || "General Clinic"}</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                 <div className='p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-blue-600'><IconClock size={18} stroke={2}/></div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Experience</p>
                  <p className='font-semibold text-gray-900 dark:text-white'>{experience || "N/A"}</p>
                </div>
              </div>

               <div className='flex items-start gap-3'>
                 <div className='p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-blue-600'><IconTag size={18} stroke={2}/></div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Gender Preference</p>
                  <p className='font-semibold text-gray-900 dark:text-white capitalize'>{gender || "Unspecified"}</p>
                </div>
              </div>
              
            </div>
          </section>
          
        </div>

        {/* Right Side (Sidebar Components) */}
        <div className='md:col-start-3'>
          <AppointmentBookingCard 
            detailsData={detailsData}
            //fee={fee} 
            //appointmentDate={appointmentDate} 
            //appointmentTime={appointmentTime} 
          />
          
          {/* Admin Controls Box */}
          <div className='mt-8 p-4 bg-gray-50 dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 flex flex-row items-center gap-4 justify-between'>
             <p className='text-sm font-semibold text-gray-900 dark:text-white'>Admin Controls:</p>
             <div className='flex gap-2.5'>
                <AppointmentEditModal detailsData={detailsData}/>
                <Delete detailsData={detailsData}/>
             </div>
          </div>

        </div>
        
      </div>
      
    </div>
  );
};

export default AppointmentDetails;