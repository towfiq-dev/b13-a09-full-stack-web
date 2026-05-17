import React from 'react';
import { FaXTwitter, FaYoutube, FaFacebook, FaBuilding } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-900 text-slate-300 overflow-hidden py-1">
      
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto my-6 mx-4 sm:mx-6 lg:mx-auto p-8 lg:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white">

              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                <FaBuilding className="text-2xl text-white" />
              </div>
              <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                DocAppointment Industries Ltd.
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed text-slate-400">
              Providing reliable tech solutions and outstanding services since 1992.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h6>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Branding</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Design</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Marketing</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Advertisement</a>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h6>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">About us</a>
            <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
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