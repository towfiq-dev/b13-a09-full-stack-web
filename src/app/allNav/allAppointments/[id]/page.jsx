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
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`,{
    headers:{
      authorization: `Bearer ${token}`
    }
  });
  
  if (!res.ok) {
    return (
      <div className='flex justify-center items-center min-h-[60vh] mt-25'>
        <div className="p-8 text-center bg-red-50/50 dark:bg-red-950/10 border-2 border-red-100 dark:border-red-900/30 rounded-3xl max-w-md shadow-2xl backdrop-blur-md">
          <p className='text-red-500 dark:text-red-400 font-extrabold text-lg mb-2'>
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

  const mockRating = 4.9;
  const mockReviewCount = 248;

  return (
    <div className='mt-25 max-w-7xl mx-auto px-4 py-12 md:py-20 relative'>
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-500/[0.03] dark:bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-indigo-500/[0.03] dark:bg-indigo-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-14 relative z-10'>
        
        {/* Left Side (Content - Takes 2 Columns) */}
        <div className='lg:col-span-2 space-y-10'>
          
          {/* Header Info Banner */}
          <div className='bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/30 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/40 border-2 border-blue-100/70 dark:border-blue-950/40 rounded-[32px] p-6 md:p-8 shadow-xl shadow-slate-200/40 dark:shadow-black/30 relative overflow-hidden group'>
            <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/[0.02] dark:bg-blue-500/[0.01] rounded-full blur-2xl pointer-events-none" />
            
            <div className='flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4 bg-blue-100/40 dark:bg-blue-950/40 px-3 py-1.5 rounded-xl w-fit border border-blue-200/20 shadow-sm'>
              <IconHospital size={16} stroke={2} className="animate-pulse" />
              <span className='text-xs font-black uppercase tracking-widest'>{hospital || "General Hospital"}</span>
            </div>
            
            <h1 className='text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight'>
              Appointment with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{doctorName || "Dr. Unknown"}</span>
            </h1>
            
            {/* Meta Info Row */}
            <div className='flex flex-wrap items-center gap-4 text-sm bg-white/80 dark:bg-neutral-800/40 border border-gray-100 dark:border-neutral-800/60 p-3 rounded-2xl w-fit shadow-sm'>
              <div className='flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-xl font-bold'>
                <IconStarFilled size={14} className="mb-0.5" />
                <span>{mockRating}</span>
                <span className='text-xs text-amber-600/70 dark:text-amber-400/70 font-medium'>({mockReviewCount}+)</span>
              </div>
              
              <div className='h-4 w-[1px] bg-gray-200 dark:bg-neutral-700' />
              
              <div className='flex items-center gap-1.5 text-gray-600 dark:text-gray-300 font-semibold px-2'>
                <IconClock size={16} className='text-blue-500' />
                <span>{appointmentTime || "Not Scheduled"}</span>
              </div>

              {specialty && (
                <>
                  <div className='h-4 w-[1px] bg-gray-200 dark:bg-neutral-700' />
                  <div className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-3 py-1.5 rounded-xl font-black tracking-wide shadow-sm shadow-blue-500/10 uppercase'>
                    {specialty}
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Appointment Overview Section */}
          <section className='bg-white dark:bg-neutral-900/40 border border-gray-100 dark:border-neutral-800/60 rounded-[32px] p-6 md:p-8 shadow-md shadow-gray-100/50 dark:shadow-transparent'>
            <h2 className='text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-5 flex items-center gap-3 border-b border-gray-100 dark:border-neutral-800/80 pb-4'>
              <div className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl"><IconTag size={20} stroke={2.5} /></div>
              Appointment Overview
            </h2>
            <div className='space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]'>
              <p>
                Patient <strong className='text-gray-900 dark:text-white font-bold'>{patientName || "Unknown Patient"}</strong> has an 
                appointment scheduled for <strong className='text-blue-600 dark:text-blue-400 font-bold'>{appointmentDate || "a later date"}</strong> 
                at <span className='text-gray-900 dark:text-white font-bold'>{appointmentTime || "to be determined"}</span>. The clinical visit will take place at <span className="font-semibold text-gray-800 dark:text-gray-200">{hospital || "their preferred facility"}</span>.
              </p>
              
              <div className='flex gap-4 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/10 dark:to-transparent p-4 rounded-r-2xl italic text-gray-500 dark:text-gray-400 text-sm font-medium'>
                <IconShieldCheck size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <p>Ensure both doctor and patient confirm availability. The medical facility provides state-of-the-art diagnostic equipment and continuous on-desk assistance.</p>
              </div>
            </div>
          </section>
          
          {/* Key Details Section */}
          <section className='bg-white dark:bg-neutral-900/40 border border-gray-100 dark:border-neutral-800/60 rounded-[32px] p-6 md:p-8 shadow-md shadow-gray-100/50 dark:shadow-transparent'>
            <h2 className='text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-neutral-800/80 pb-4'>
               <div className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl"><IconStethoscope size={20} stroke={2.5} /></div>
               Appointment Key Details
            </h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
              
              {/* Patient Name Box */}
              <div className='flex items-center gap-4 bg-slate-50/60 dark:bg-neutral-800/30 border border-gray-100/60 dark:border-neutral-800/40 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800/80 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-transparent group/box'>
                <div className='p-3 bg-white dark:bg-neutral-900 rounded-xl text-blue-500 shadow-sm border border-gray-100 dark:border-neutral-800 group-hover/box:text-white group-hover/box:bg-blue-500 transition-all duration-300'><IconUser size={20} stroke={2.5}/></div>
                <div>
                  <p className='text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider'>Patient Name</p>
                  <p className='font-extrabold text-gray-900 dark:text-white text-[15px] mt-0.5'>{patientName}</p>
                </div>
              </div>

              {/* Doctor Name Box */}
              <div className='flex items-center gap-4 bg-slate-50/60 dark:bg-neutral-800/30 border border-gray-100/60 dark:border-neutral-800/40 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800/80 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-transparent group/box'>
                 <div className='p-3 bg-white dark:bg-neutral-900 rounded-xl text-indigo-500 shadow-sm border border-gray-100 dark:border-neutral-800 group-hover/box:text-white group-hover/box:bg-indigo-500 transition-all duration-300'><IconUser size={20} stroke={2.5}/></div>
                <div>
                  <p className='text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider'>Doctor Name</p>
                  <p className='font-extrabold text-gray-900 dark:text-white text-[15px] mt-0.5'>{doctorName}</p>
                </div>
              </div>
              
              {/* Patient Contact Box */}
              <div className='flex items-center gap-4 bg-slate-50/60 dark:bg-neutral-800/30 border border-gray-100/60 dark:border-neutral-800/40 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800/80 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-transparent group/box'>
                <div className='p-3 bg-white dark:bg-neutral-900 rounded-xl text-emerald-500 shadow-sm border border-gray-100 dark:border-neutral-800 group-hover/box:text-white group-hover/box:bg-emerald-500 transition-all duration-300'><IconPhone size={20} stroke={2.5}/></div>
                <div>
                  <p className='text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider'>Patient Contact</p>
                  <p className='font-extrabold text-gray-900 dark:text-white text-[15px] mt-0.5'>{phoneNumber || "N/A"}</p>
                </div>
              </div>
              
              {/* Medical Facility Box */}
              <div className='flex items-center gap-4 bg-slate-50/60 dark:bg-neutral-800/30 border border-gray-100/60 dark:border-neutral-800/40 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800/80 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-transparent group/box'>
                <div className='p-3 bg-white dark:bg-neutral-900 rounded-xl text-rose-500 shadow-sm border border-gray-100 dark:border-neutral-800 group-hover/box:text-white group-hover/box:bg-rose-500 transition-all duration-300'><IconHospital size={20} stroke={2.5}/></div>
                <div>
                  <p className='text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider'>Medical Facility</p>
                  <p className='font-extrabold text-gray-900 dark:text-white text-[15px] mt-0.5 line-clamp-1'>{hospital || "General Clinic"}</p>
                </div>
              </div>

              {/* Experience Box */}
              <div className='flex items-center gap-4 bg-slate-50/60 dark:bg-neutral-800/30 border border-gray-100/60 dark:border-neutral-800/40 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800/80 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-transparent group/box'>
                 <div className='p-3 bg-white dark:bg-neutral-900 rounded-xl text-purple-500 shadow-sm border border-gray-100 dark:border-neutral-800 group-hover/box:text-white group-hover/box:bg-purple-500 transition-all duration-300'><IconBriefcase size={20} stroke={2.5}/></div>
                <div>
                  <p className='text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider'>Experience</p>
                  <p className='font-extrabold text-gray-900 dark:text-white text-[15px] mt-0.5'>{experience || "N/A"}</p>
                </div>
              </div>

              {/* Gender Preference Box */}
              <div className='flex items-center gap-4 bg-slate-50/60 dark:bg-neutral-800/30 border border-gray-100/60 dark:border-neutral-800/40 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800/80 hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-transparent group/box'>
                <div className='p-3 bg-white dark:bg-neutral-900 rounded-xl text-amber-500 shadow-sm border border-gray-100 dark:border-neutral-800 group-hover/box:text-white group-hover/box:bg-amber-500 transition-all duration-300'><IconGenderTransgender size={20} stroke={2.5}/></div>
                <div>
                  <p className='text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider'>Gender Preference</p>
                  <p className='font-extrabold text-gray-900 dark:text-white text-[15px] mt-0.5 capitalize'>{gender || "Unspecified"}</p>
                </div>
              </div>
              
            </div>
          </section>
          
        </div>

        {/* Right Side (Sidebar Components - Takes 1 Column) */}
        <div className='lg:col-span-1 space-y-8'>
          
          <div className="sticky top-28">
            <AppointmentBookingCard detailsData={detailsData} />
            
            {/* Admin Controls Box */}
            <div className='mt-6 p-5 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-neutral-900 dark:to-neutral-950 border border-slate-800 dark:border-neutral-800 rounded-3xl flex flex-row items-center gap-4 justify-between shadow-xl shadow-slate-900/10'>
               <div>
                 <p className='text-sm font-bold text-white mt-0.5'>Admin Controls</p>
               </div>
               <div className='flex gap-2.5'>
                  <AppointmentEditModal detailsData={detailsData}/>
                  <Delete detailsData={detailsData}/>
               </div>
            </div>
          </div>

        </div>
        
      </div>
      
    </div>
  );
};

export default AppointmentDetails;