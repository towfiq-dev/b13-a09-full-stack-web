'use client';

import React, { useState } from 'react';
import {
  Calendar,
  ChevronDown,
  Clock,
  Edit,
  Mail,
  Phone,
  Stethoscope,
  User,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const AppointmentEditModal = ({ detailsData }) => {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updateUser = Object.fromEntries(formData.entries());
    const { data: tokenData } = await authClient.token();
    
    if (!tokenData?.token) {
      toast.error('Authentication token missing. Please login again.');
      return;
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${detailsData._id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${tokenData.token}`
        },
        body: JSON.stringify(updateUser),
      }
    );

    const data = await res.json();

    if (data) {
      toast.success('Appointment Update Successfully');
      router.refresh()
      router.push('/allNav/allAppointments');
    } else {
      toast.error('Something went wrong');
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-blue-500 bg-white px-2 py-2 font-medium text-blue-600 shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white"
      >
        <Edit size={16} />
        Reschedule
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-24 backdrop-blur-sm">

          {/* Modal Box */}
          <div className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]">

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-white transition hover:bg-white/20"
            >
              <X size={18} />
            </button>

            <form onSubmit={onSubmit}>

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-5 text-white">

                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  📝 Update Appointment Information
                </h2>

                <p className="mt-1 text-sm text-white/90">
                  Modify the necessary fields below to update the scheduling details.
                </p>

              </div>

              {/* Body */}
              <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  {/* User Email */}
                  <div className="md:col-span-2">

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      User Email
                    </label>

                    <div className="relative">

                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                      <input
                        type="email"
                        name="userEmail"
                        readOnly
                        defaultValue={detailsData?.userEmail || ''}
                        placeholder="user@gmail.com"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* Doctor Name */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Doctor Name
                    </label>

                    <div className="relative">

                      <Stethoscope className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                      <input
                        type="text"
                        name="doctorName"
                        defaultValue={detailsData?.doctorName || ''}
                        placeholder="Dr. Name"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* Patient Name */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Patient Name
                    </label>

                    <div className="relative">

                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                      <input
                        type="text"
                        name="patientName"
                        defaultValue={detailsData?.patientName || ''}
                        placeholder="Patient Name"
                        readOnly
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* Gender */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Gender
                    </label>

                    <div className="relative">

                      <select
                        name="gender"
                        defaultValue={detailsData?.gender || ''}
                        required
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 pr-10 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>

                      </select>

                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                    </div>

                  </div>

                  {/* Phone Number */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Phone Number
                    </label>

                    <div className="relative">

                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                      <input
                        type="tel"
                        name="phoneNumber"
                        defaultValue={detailsData?.phoneNumber || ''}
                        placeholder="017XXXXXXXX"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* Appointment Date */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Appointment Date
                    </label>

                    <div className="relative">

                      <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                      <input
                        type="date"
                        name="appointmentDate"
                        defaultValue={detailsData?.appointmentDate || ''}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* Appointment Time */}
                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Appointment Time
                    </label>

                    <div className="relative">

                      <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                      <input
                        type="time"
                        name="appointmentTime"
                        defaultValue={detailsData?.appointmentTime || ''}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50 px-6 py-4">

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-xl border border-gray-300 bg-white px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </>
  );
};

export default AppointmentEditModal;