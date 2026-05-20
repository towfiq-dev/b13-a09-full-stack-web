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