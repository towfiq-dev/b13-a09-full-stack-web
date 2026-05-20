'use client'
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for contacting DocAppointment! We will get back to you soon.', {
  className: 'max-w-md w-full md:min-w-[500px]', 
    });
    e.target.reset();
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-16 px-4 text-center">
        <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight">
          We're Here to Help <span className="text-cyan-400">You</span>
        </h1>
        <p className="text-slate-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Have questions about booking, subscription, or technical issues? Reach out to our dedicated support team 24/7.
        </p>
      </div>

      {/* Main Content Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Contact Information Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Information</h2>
            <p className="text-slate-500 text-sm mb-6">
              Fill out the form or reach us through the channels below.
            </p>

            {/* Info Items */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Emergency Hotlines</p>
                  <p className="text-sm font-semibold text-slate-800">+880 1234-567890</p>
                  <p className="text-xs text-slate-500">24/7 Super-Fast Support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Support</p>
                  <p className="text-sm font-semibold text-slate-800">support@docappointment.com</p>
                  <p className="text-xs text-slate-500">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Main Office Location</p>
                  <p className="text-sm font-semibold text-slate-800">Mirpur, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Working Hours</p>
                  <p className="text-sm font-semibold text-slate-800">Mon - Sun: 08:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
            <ShieldCheck size={28} className="text-emerald-500 flex-shrink-0" />
            <span>Your personal information and medical inquiries are safe and encrypted with us.</span>
          </div>
        </div>

        {/* Right Side: Contact Form Card (Spans 2 columns on large screens) */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
          <p className="text-slate-500 text-sm mb-6">
            We values your feedback. Please fill up this form carefully.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +880 1700-000000"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Inquiry Subject *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200 appearance-none"
                >
                  <option value="appointment">Appointment Booking Issue</option>
                  <option value="doctor">Doctor Consultation Feedback</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Refund</option>
                  <option value="other">Other General Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                Your Message *
              </label>
              <textarea
                required
                rows="5"
                placeholder="Write your details inquiry here..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 text-sm"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;