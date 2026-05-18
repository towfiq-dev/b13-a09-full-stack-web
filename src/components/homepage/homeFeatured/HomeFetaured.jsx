import { getFeatured } from '@/lib/data-fetch';
import React from 'react';
import Link from 'next/link';
import { 
  IconBriefcase, 
  IconMapPin, 
  IconCurrencyTaka, 
  IconStarFilled, 
  IconArrowUpRight,
  IconStethoscope,
  IconMedal 
} from '@tabler/icons-react';

const HomeFeatured = async () => {
  const featureds = await getFeatured();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/50 px-3 py-1.5 rounded-full">
          Meet Our Experts
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-3 mb-4 tracking-tight sm:text-5xl">
          Top-Rated Specialists
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-normal">
          Discover our highly recommended medical experts, custom selected based on exceptional patient ratings and feedback.
        </p>
      </div>

      {/* Grid Layout - 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {featureds?.map((featured, index) => {
          const {
            _id,
            doctorName,
            specialty,
            experience,
            hospital,
            fee
          } = featured;

          const dynamicRating = featured.rating || (4.5 + (index % 5) * 0.1).toFixed(1);
          const dynamicReviews = featured.reviews || (35 + (index * 12) + (index % 3) * 7);

          return (
            <div 
              key={_id} 
              className="group relative bg-white dark:bg-neutral-900/90 border border-gray-100 dark:border-neutral-800/80 rounded-3xl p-6 shadow-xl shadow-gray-200/30 dark:shadow-black/20 hover:shadow-blue-500/[0.04] hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm pt-8"
            >
              
              {/* কোণার সুন্দর ব্যাজ আইকন (Badge) */}
              <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md shadow-amber-500/20 transform group-hover:-translate-y-0.5 transition-transform duration-300">
                <IconMedal size={14} stroke={2.5} className="animate-bounce" />
                <span>Top Verified</span>
              </div>

              <div>
                {/* Doctor Avatar & Profile Info */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                    <IconStethoscope size={28} stroke={1.5} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                      {doctorName || "Dr. Ayesha Rahman"}
                    </h3>
                    <span className="inline-flex bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-xl font-semibold tracking-wide">
                      {specialty || "Cardiologist"}
                    </span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-100 dark:bg-neutral-800/60 my-5" />

                {/* Additional Details */}
                <div className="space-y-3.5 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-3 bg-gray-50/50 dark:bg-neutral-800/30 px-3 py-2 rounded-xl">
                    <IconBriefcase size={18} className="text-blue-500 shrink-0" />
                    <p className="font-medium">
                      Experience: <span className="text-gray-900 dark:text-gray-200 font-semibold">{experience || "10 years"}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gray-50/50 dark:bg-neutral-800/30 px-3 py-2 rounded-xl">
                    <IconMapPin size={18} className="text-emerald-500 shrink-0" />
                    <p className="line-clamp-1 font-medium">
                      Hospital: <span className="text-gray-900 dark:text-gray-200 font-semibold">{hospital || "Labaid Hospital"}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50/50 dark:bg-neutral-800/30 px-3 py-2 rounded-xl">
                    <IconCurrencyTaka size={18} className="text-amber-500 shrink-0" stroke={2.5} />
                    <p className="font-medium">
                      Visit Fee: <span className="text-gray-900 dark:text-gray-200 font-extrabold text-base">{fee ? parseInt(fee).toLocaleString() : "800"} ৳</span>
                    </p>
                  </div>

                  {/* সম্পূর্ণ আলাদা ও ভিন্ন ভিন্ন রেটিং এবং রিভিউ সেকশন */}
                  <div className="flex items-center gap-3 bg-gray-50/50 dark:bg-neutral-800/30 px-3 py-2 rounded-xl">
                    <IconStarFilled size={16} className="text-amber-400 shrink-0" />
                    <p className="font-medium">
                      Rating: <span className="font-bold text-gray-900 dark:text-white">{dynamicRating}</span> <span className="text-xs text-gray-400 dark:text-gray-500">({dynamicReviews}+ reviews)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Link 
                  href={`/allNav/allAppointments/${_id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-neutral-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 group/btn"
                >
                  <span>View Details</span>
                  <IconArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFeatured;