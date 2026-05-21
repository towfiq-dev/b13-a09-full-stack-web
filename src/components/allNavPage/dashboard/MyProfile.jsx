'use client'

import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Camera, Save, CheckCircle } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const InputField = ({ label, icon: Icon, type = 'text', name, value, onChange, placeholder, disabled }) => (
  <div>
    <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500">
        <Icon size={17} />
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full pl-11 pr-4 py-3.5 rounded-xl text-sm font-medium
          border border-gray-200 dark:border-white/[0.08]
          bg-gray-50/80 dark:bg-white/[0.04]
          text-gray-800 dark:text-white
          placeholder-gray-400 dark:placeholder-slate-600
          focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
        `}
      />
    </div>
  </div>
);

const MyProfile = ({ user }) => {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingProfile, setFetchingProfile] = useState(true);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '',
    location: '',
    bio: '',
    image: user?.image || '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) {
        setFetchingProfile(false);
        return;
      }
      try {

        const tokenRes = await authClient.token();
        const token = tokenRes?.data?.token;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user-profile/${user.id}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        if (res.ok) {
          const data = await res.json();
          setFormData({
            name: data.name || user?.name || '',
            phone: data.phone || '',
            location: data.location || '',
            bio: data.bio || '',
            image: data.image || user?.image || ''
          });
        } else {

          setFormData(prev => ({ ...prev, name: user?.name || '' }));
        }
      } catch (error) {
        console.error('Profile fetch error:', error);
        setFormData(prev => ({ ...prev, name: user?.name || '' }));
      } finally {
        setFetchingProfile(false);
      }
    };

    fetchProfile();
  }, [user?.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('Name cannot be empty!');
      return;
    }

    setLoading(true);
    try {

      await authClient.updateUser
      ({ name: formData.name, image: formData.image });

      const tokenRes = await authClient.token();
      const token = tokenRes?.data?.token;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user-profile/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            location: formData.location,
            bio: formData.bio,
            image: formData.image,
          }),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to save profile');
      }

      setSaved(true);
      toast.success('Profile updated successfully!');
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Profile save error:', error);
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (fetchingProfile) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-gray-900 dark:text-white font-black text-2xl">My Profile</h2>
        <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">Manage your personal information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-100 dark:border-white/[0.06] shadow-sm overflow-hidden">

        {/* Cover / Avatar section */}
        <div className="relative h-28 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
          />
        </div>

        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-12 mb-6 gap-4">
            <div className="relative w-24 h-24">
              {user?.image ? (
                <img
                  src={formData.image || user?.image}
                  alt={user.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white dark:ring-[#0f172a] shadow-xl"
                />
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center ring-4 ring-white dark:ring-[#0f172a] shadow-xl">
                  <span className="text-white font-black text-3xl">
                    {formData.name?.charAt(0)?.toUpperCase() || user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
              )}
              <button
                type="button"
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-500 hover:bg-cyan-400 rounded-xl flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              >
                <Camera size={14} className="text-white" />
              </button>
            </div>

            <div className="sm:text-right pb-1">
              <p className="text-gray-900 dark:text-white font-black text-xl">{formData.name || user?.name}</p>
              <p className="text-gray-400 dark:text-slate-500 text-sm">{user?.email}</p>
              <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Active Account
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Full Name"
                icon={User}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
              <InputField
                label="Email Address"
                icon={Mail}
                type="email"
                name="email"
                value={user?.email || ''}
                onChange={() => {}}
                placeholder="your@email.com"
                disabled
              />
              <InputField
              label="Profile Image URL"
              icon={Camera} 
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/your-image.jpg"
              />
              <InputField
                label="Phone Number"
                icon={Phone}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
              />
              <InputField
                label="Location"
                icon={MapPin}
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Country"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                About / Bio
              </label>
              <textarea
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write a short bio about yourself..."
                className="w-full px-4 py-3.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-white/[0.08] bg-gray-50/80 dark:bg-white/[0.04] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer
                  ${saved
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                  }
                  disabled:opacity-60
                `}
              >
                {saved ? (
                  <><CheckCircle size={16} /> Saved!</>
                ) : loading ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Saving...</>
                ) : (
                  <><Save size={16} /> Save Changes</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
