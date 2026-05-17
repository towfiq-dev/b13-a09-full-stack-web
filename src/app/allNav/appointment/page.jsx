'use client'
import React from 'react';
import { Mail, User, Stethoscope, Phone, Calendar, Clock, ChevronDown } from 'lucide-react';
import { toast } from 'react-toastify';

export default function AppointmentForm() {

  const onSubmit = async(e)=>{
  e.preventDefault()
  const form = e.currentTarget;
  const formData = new FormData(e.currentTarget)
  const newUser = Object.fromEntries(formData.entries())
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    
    const data = await res.json();
    
    if (data) {
      toast.success('Appointment booked successfully!');
      form.reset(); 
      
    } else {
      toast.error('Something went wrong');
    }
  } catch (error) {
    console.error(error);
    toast.error('Server error. Please try again.');
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 mt-20">
      {/* Form Container */}
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-lg">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 py-6 text-center text-white">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold md:text-3xl">
            📅 Appointment Booking Form
          </h2>
          <p className="mt-1 text-sm opacity-90">
            Please fill in the details below to confirm your healthcare scheduling.
          </p>
        </div>

        {/* Form Body */}
        <form className="p-6 md:p-8" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            
            {/* User Email (Full Width) */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="userEmail" className="text-sm font-semibold text-gray-700">
                User Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  placeholder="user@gmail.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-11 pr-4 text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Doctor Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="doctorName" className="text-sm font-semibold text-gray-700">
                Doctor Name
              </label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="doctorName"
                  name="doctorName"
                  placeholder="Dr. Ayesha Rahman"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-11 pr-4 text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Patient Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="patientName" className="text-sm font-semibold text-gray-700">
                Patient Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  placeholder="Rahim Uddin"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-11 pr-4 text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Gender Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="gender" className="text-sm font-semibold text-gray-700">
                Gender
              </label>
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  defaultValue=""
                  required
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-4 pr-10 text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 pointer-events-none text-gray-500" />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="01712345678"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-11 pr-4 text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Appointment Date */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="appointmentDate" className="text-sm font-semibold text-gray-700">
                Appointment Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-11 pr-4 text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Appointment Time */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="appointmentTime" className="text-sm font-semibold text-gray-700">
                Appointment Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="time"
                  id="appointmentTime"
                  name="appointmentTime"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-11 pr-4 text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 text-center font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 active:scale-[0.99]"
            >
              Book Appointment
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}