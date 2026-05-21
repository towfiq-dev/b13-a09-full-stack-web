import Image from 'next/image';
import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import footerLogo from '@/assets/images/navLogo.png'
const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-900 text-slate-300 overflow-hidden py-1 mt-30">
      
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto my-6 mx-4 sm:mx-6 lg:mx-auto p-8 lg:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
<div className="lg:col-span-2 flex flex-col gap-4">
  {/* Logo + Icon Row */}
    <div className="flex-shrink-0">
  <Image
    src={footerLogo}
    alt="DocAppointment Logo"
    className="w-32 h-auto sm:w-40 md:w-48 lg:w-55"
  />
</div>

  {/* Company Name */}
  <span className="text-sm sm:text-base font-bold text-white leading-snug">
    DocAppointment Industries{" "}
    <span className="text-cyan-400">Ltd.</span>
  </span>

  {/* Tagline */}
  <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-[260px]">
    Providing reliable tech solutions and outstanding services since 1992.
  </p>
</div>

          <div className="flex flex-col gap-3">
            <h6 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h6>
            <a href={"/allNav/appointment"} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Appointments</a>
            <a href={"/allNav/allAppointments"} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">All Appointments</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Marketing</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Advertisement</a>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h6>
            <a href="/allNav/contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">About us</a>
            <a href="/allNav/contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Jobs</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Press kit</a>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h6>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Terms of use</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Privacy policy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Cookie policy</a>
          </div>

        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          
          <div>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved by DocAppointment Industries Ltd.</p>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md">
              <FaXTwitter className="text-base" />
            </a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-lg bg-white/5 hover:bg-red-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md">
              <FaYoutube className="text-base" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/5 hover:bg-red-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md">
              <BsInstagram className="text-base" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md">
              <FaFacebook className="text-base" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;