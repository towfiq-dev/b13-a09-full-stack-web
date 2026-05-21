import Image from 'next/image';
import React from 'react';
import support from '@/assets/images/contact.png'; 
import Link from 'next/link';

const Support = () => {
  return (
    <div className="w-full px-6 py-12 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
      
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h3 className="text-[#00c5fb] font-semibold text-sm tracking-wide uppercase mb-2">
          Top Notch Support
        </h3>
        <h2 className="text-[#152e4d] font-bold text-3xl md:text-4xl leading-tight mb-4">
          24/7 Super-Fast Support
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-md">
          Contact our effective 24/7 support team to get professional assistance for any questions you may have about us.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <button className="px-7 py-3 rounded-full bg-[#00a8e8] text-white font-medium shadow-md hover:bg-[#0096d1] active:scale-95 transition-all duration-200 cursor-pointer text-sm">
            Documentation
          </button>
          <Link href={'/allNav/contact'}>
          <button className="px-9 py-3 rounded-full bg-[#00a8e8] text-white font-medium shadow-md hover:bg-[#0096d1] active:scale-95 transition-all duration-200 cursor-pointer text-sm">
            Support
          </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center md:justify-end w-full">
        <div className="relative w-full max-w-[450px] aspect-[4/3] md:max-w-[500px]">
          <Image 
            src={support} 
            alt="Support Section Graphics" 
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

    </div>
  );
};

export default Support;