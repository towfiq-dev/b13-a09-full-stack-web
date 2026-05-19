// import React from 'react';
// import { auth } from "@/lib/auth"; 
// import { headers } from "next/headers";
// import Link from 'next/link';
// import { IconEye, IconCalendar, IconClock, IconCurrencyTaka } from '@tabler/icons-react';
// import BookingDelete from '@/components/allNavPage/dashboard/BookingDelete'

// export const metadata = {
//   title: "Patient Dashboard | Smart Clinic Solution",
//   description: "Access and manage your doctor consultations, real-time appointments status, medical schedules, and history securely.",
//   keywords: [
//     "Patient Dashboard",
//     "Manage Appointments",
//     "My Bookings",
//     "Medical History",
//     "Doctor Consultation Details",
//     "Healthcare Portal"
//   ],
//   robots: {
//     index: false,
//     follow: false,
//   }
// };

// const Dashboard = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers()

//   });
//   const user = session?.user;

//   if (!user) {
//     return (
//       <div className='mt-25 p-6 text-center text-red-500 font-medium'>
//         Please log in to view your dashboard.
//       </div>
//     );
//   }

//   let bookingsData = [];

//   try {
//     const {token} = await auth.api.getToken({
//         headers: await headers()
//       })
//       console.log(token);
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`, {
//       headers:{
//             authorization: `Bearer ${token}`
//           }
//     });

//     if (res.ok) {
//       bookingsData = await res.json();
//     }
//   } catch (error) {
//     console.error("something went wrong:", error);
//   }

//   return (
//     <div className='mt-25 p-6 max-w-5xl mx-auto'>
//       <div className='flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4'>
//         <div>
//           <h1 className='text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight'>
//             Dashboard
//           </h1>
//           <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
//             Welcome back, <span className='font-semibold text-blue-600'>{user.name}</span>! Manage your consultations here.
//           </p>
//         </div>
        
//         <div className='bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 px-5 py-3 rounded-2xl flex items-center gap-3 self-start md:self-auto'>
//           <span className='w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse' />
//           <span className='text-sm font-medium text-blue-800 dark:text-blue-300'>
//             Total Appointments: <span className='font-bold text-lg ml-1'>{bookingsData.length}</span>
//           </span>
//         </div>
//       </div>

//       <div className='grid grid-cols-1 gap-5'>
//         {
//           bookingsData.length > 0 ? (
//             bookingsData.map((booking, index) => (
//               <div 
//                 key={booking._id || index} 
//                 className='group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-xl shadow-gray-500/[0.02] dark:shadow-black/[0.1] hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300 gap-6'
//               >

//                 <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1'>
                  
//                   <div className='space-y-1.5'>
//                     <div className='inline-flex px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'>
//                       {booking.specialty || "General"}
//                     </div>
//                     <h3 className='font-bold text-gray-900 dark:text-white text-xl tracking-tight group-hover:text-blue-600 transition-colors duration-200'>
//                       {booking.doctorName}
//                     </h3>
//                     <p className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5'>
//                       <span className='inline-block w-1.5 h-1.5 rounded-full bg-emerald-500' />
//                       Patient: <span className='font-medium text-gray-700 dark:text-gray-300'>{booking.userName}</span>
//                     </p>
//                   </div>

//                   <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 border-t sm:border-t-0 md:border-l border-gray-100 dark:border-neutral-800 pt-4 sm:pt-0 md:pl-8'>
//                     <div className='flex items-center gap-2 bg-gray-50 dark:bg-neutral-800/50 px-3 py-1.5 rounded-xl'>
//                       <IconCalendar size={16} className='text-gray-400' />
//                       <span className='font-medium'>{booking.appointmentDate || "2026-05-20"}</span>
//                     </div>
//                     <div className='flex items-center gap-2 bg-gray-50 dark:bg-neutral-800/50 px-3 py-1.5 rounded-xl'>
//                       <IconClock size={16} className='text-gray-400' />
//                       <span className='font-medium'>{booking.appointmentTime || "10:30 AM"}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className='flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-gray-100 dark:border-neutral-800 pt-4 sm:pt-0'>
                  
//                   <div className='text-right'>
//                     <p className='text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold'>Fee</p>
//                     <div className='flex items-center text-gray-900 dark:text-white font-extrabold text-xl mt-0.5'>
//                       <IconCurrencyTaka size={20} className='text-gray-500' stroke={2.5} />
//                       <span>{booking.fee ? parseInt(booking.fee).toLocaleString() : "0"}</span>
//                     </div>
//                   </div>

//                   <div className='flex items-center gap-2.5'>
                    
//                     {/*View Details*/}
//                     <Link 
//                       href={`/allNav/allAppointments/${booking.detailsDataId || booking._id}`}
//                       className='inline-flex items-center gap-2 bg-gray-50 dark:bg-neutral-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 border border-gray-200/60 dark:border-neutral-700/60 hover:border-blue-600 shadow-sm'
//                     >
//                       <IconEye size={16} />
//                       <span>View</span>
//                     </Link>

//                     <BookingDelete booking={booking}/>

//                   </div>
//                 </div>

//               </div>
//             ))
//           ) : (
//             <div className='text-center py-16 border border-dashed border-gray-200 dark:border-neutral-800 rounded-3xl bg-gray-50/50 dark:bg-neutral-900/20'>
//               <p className='text-gray-400 dark:text-gray-500 text-sm italic'>No bookings available at the moment.</p>
//             </div>
//           )
//         }
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DashboardClient from '@/components/allNavPage/dashboard/DashboardClient';

export const metadata = {
  title: "Patient Dashboard | Smart Clinic Solution",
  description: "Access and manage your doctor consultations, real-time appointments status, medical schedules, and history securely.",
  keywords: [
    "Patient Dashboard",
    "Manage Appointments",
    "My Bookings",
    "Medical History",
    "Doctor Consultation Details",
    "Healthcare Portal"
  ],
  robots: {
    index: false,
    follow: false,
  }
};

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#060d1b]">
        <div className="text-center space-y-4 px-6">
          <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center mx-auto">
            <span className="text-red-500 text-2xl">🔒</span>
          </div>
          <h2 className="text-gray-900 dark:text-white font-bold text-xl">Access Denied</h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm">Please log in to view your dashboard.</p>
          <a
            href="/auth/signin"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  let bookingsData = [];

  try {
    const { token } = await auth.api.getToken({
      headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      bookingsData = await res.json();
    }
  } catch (error) {
    console.error("Dashboard fetch error:", error);
  }

  return <DashboardClient user={user} bookings={bookingsData} />;
};

export default Dashboard;