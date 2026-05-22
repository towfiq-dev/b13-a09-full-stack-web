'use client';

import React, { useState } from 'react';
import {
  X,
  Edit3,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Stethoscope,
  ChevronDown,
  CheckCircle,
  Lock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

/*helper*/
const Field = ({
  label,
  icon: Icon,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled,
  required
}) => (
  <div>
    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
      {label}
      {disabled && <Lock size={10} className="text-gray-400" />}
    </label>

    <div className="relative">
      <Icon
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type={type}
        name={name}
        value={value ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full rounded-xl border py-3 pl-10 pr-4 text-sm font-medium outline-none transition-all
          ${
            disabled
              ? 'cursor-not-allowed border-gray-100 bg-gray-50 text-gray-400'
              : 'border-gray-200 bg-gray-50 text-gray-700 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100'
          }
        `}
      />
    </div>
  </div>
);

const BookingUpdateModal = ({ booking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // editable fields
  const [formData, setFormData] = useState({
    userName: booking.userName || '',
    phoneNumber: booking.phoneNumber || '',
    gender: booking.gender || '',
    appointmentDate: booking.appointmentDate || '',
    appointmentTime: booking.appointmentTime || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // modal open
  const handleOpen = () => {
    setFormData({
      userName: booking.userName || '',
      phoneNumber: booking.phoneNumber || '',
      gender: booking.gender || '',
      appointmentDate: booking.appointmentDate || '',
      appointmentTime: booking.appointmentTime || '',
    });

    setIsOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // editable fields only
    const updatedData = {
      userName: formData.userName,
      phoneNumber: formData.phoneNumber,
      gender: formData.gender,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime,
    };

    try {
      const { data: tokenData } = await authClient.token();

      if (!tokenData?.token) {
        toast.error('Authentication token missing. Please login again.');
        setLoading(false);
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
        {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData.token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();

      if (res.ok && data) {
        toast.success('Appointment updated successfully!');

        setIsOpen(false);

        router.refresh();
      } else {
        toast.error(
          data?.message || 'Something went wrong. Please try again.'
        );
      }
    } catch (err) {
      console.error('Booking update error:', err);

      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Update Button */}
      <button
        onClick={handleOpen}
        className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-amber-400 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 transition-all duration-200 hover:border-amber-500 hover:bg-amber-500 hover:text-white dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500 dark:hover:text-white"
      >
        <Edit3 size={14} />
        Update
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-10 backdrop-blur-sm">
          {/* Modal Box */}
          <div className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
            >
              <X size={16} />
            </button>

            <form onSubmit={handleSubmit}>
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <Edit3 size={20} />
                  </div>

                  <div>
                    <h2 className="text-xl font-black">
                      Update Booking
                    </h2>

                    <p className="mt-0.5 text-sm text-white/80">
                      Modify your appointment details below
                    </p>
                  </div>
                </div>

                {/* Doctor Badge */}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2.5">
                  <Stethoscope
                    size={16}
                    className="text-white/80"
                  />

                  <span className="text-sm font-semibold">
                    {booking.doctorName}
                  </span>

                  <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {booking.specialty || 'General'}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="max-h-[65vh] overflow-y-auto px-6 py-6">
                {/* Note */}
                <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                  <Lock
                    size={14}
                    className="mt-0.5 flex-shrink-0 text-blue-400"
                  />

                  <p className="text-xs text-blue-600">
                    <span className="font-bold">
                      Doctor Name
                    </span>
                    ,{' '}
                    <span className="font-bold">
                      User Email
                    </span>{' '}
                    and{' '}
                    <span className="font-bold">
                      Specialty
                    </span>{' '}
                    Cannot be changed.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Doctor Name */}
                  <Field
                    label="Doctor Name"
                    icon={Stethoscope}
                    name="doctorName"
                    value={booking.doctorName}
                    disabled
                  />

                  {/* User Email */}
                  <Field
                    label="User Email"
                    icon={Mail}
                    type="email"
                    name="userEmail"
                    value={booking.userEmail}
                    disabled
                  />

                  {/* Patient Name */}
                  <Field
                    label="Patient Name"
                    icon={User}
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Enter patient name"
                    required
                  />

                  {/* Specialty */}
                  <Field
                    label="Specialty"
                    icon={Stethoscope}
                    name="specialty"
                    value={booking.specialty}
                    disabled
                  />

                  {/* Phone */}
                  <Field
                    label="Phone Number"
                    icon={Phone}
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    required
                  />

                  {/* Gender */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Gender
                    </label>

                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-10 text-sm font-medium text-gray-700 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>

                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Appointment Date */}
                  <Field
                    label="Appointment Date"
                    icon={Calendar}
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />

                  {/* Appointment Time */}
                  <Field
                    label="Appointment Time"
                    icon={Clock}
                    type="time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50 px-6 py-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckCircle size={16} />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingUpdateModal;