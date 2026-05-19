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
  IconMedal,
  IconCircleCheckFilled,
  IconCrown
} from '@tabler/icons-react';

const HomeFeatured = async () => {
  const featureds = await getFeatured();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
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
      {/* এখানে ওপরে সামান্য প্যাডিং (pt-6) দেওয়া হয়েছে যাতে প্রথম লাইনের কার্ডের ব্যাজ সেকশনের টাইটেলের সাথে লেগে না যায় */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 pt-6">
        {featureds?.map((featured, index) => {
          const {
            _id,
            doctorName,
            specialty,
            experience,
            hospital,
            fee
          } = featured;

          // ১. ইউনিক ডাইনামিক রেটিং ও রিভিউর লজিক
          const uniqueSeed = _id ? _id.toString().charCodeAt(_id.toString().length - 1) : index;
          const dynamicRating = featured.rating || (4.5 + (uniqueSeed % 5) * 0.1).toFixed(1);
          const dynamicReviews = featured.reviews || (35 + (index * 12) + (uniqueSeed % 3) * 7);

          // ২. ডাইনামিক ব্যাজ কনফিগ (একেক কার্ডে একেক রকম উজ্জ্বল ব্যাজ)
          const badgeType = uniqueSeed % 3;
          let badgeConfig = {
            text: "Top Verified",
            icon: <IconMedal size={14} stroke={2.5} className="animate-bounce" />,
            className: "from-amber-500 via-orange-500 to-yellow-500 text-white ring-4 ring-amber-500/20 shadow-amber-500/30"
          };

          if (badgeType === 1) {
            badgeConfig = {
              text: "Highly Recommended",
              icon: <IconCircleCheckFilled size={14} className="animate-pulse" />,
              className: "from-emerald-500 via-teal-500 to-cyan-500 text-white ring-4 ring-emerald-500/20 shadow-emerald-500/30"
            };
          } else if (badgeType === 2) {
            badgeConfig = {
              text: "Super Expert",
              icon: <IconCrown size={14} />,
              className: "from-violet-600 via-purple-500 to-fuchsia-500 text-white ring-4 ring-violet-500/20 shadow-violet-500/30"
            };
          }

          // ৩. উইন্টার/লাক্সারি ব্যাকগ্রাউন্ড স্টাইল সেট
          const bgStyles = [
            "bg-gradient-to-br from-blue-50/90 via-white to-blue-50/40 border-blue-100/70 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/50 dark:border-blue-950/50",
            "bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 border-emerald-100/70 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/50 dark:border-emerald-950/50",
            "bg-gradient-to-br from-purple-50/90 via-white to-purple-50/40 border-purple-100/70 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/50 dark:border-purple-950/50"
          ];
          const currentBgStyle = bgStyles[uniqueSeed % bgStyles.length];

          return (
            <div 
              key={_id} 
              className={`group relative ${currentBgStyle} border-2 rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between pt-10 mt-2`}
            >
              {/* Background Subtle Wave Accent */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              {/* সম্পূর্ণ ডাইনামিক ফ্লোটিং ব্যাজ - এটি কার্ডের ওপরে ভেসে থাকবে এবং কাটবে না */}
              <div className={`absolute -top-3.5 left-6 inline-flex items-center gap-1.5 bg-gradient-to-r ${badgeConfig.className} text-xs font-black px-4 py-1.5 rounded-full shadow-lg transform group-hover:-translate-y-0.5 transition-all duration-300 z-20`}>
                {badgeConfig.icon}
                <span className="tracking-wide uppercase text-[10px]">{badgeConfig.text}</span>
              </div>

              <div>
                {/* Doctor Avatar & Profile Info */}
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 shrink-0">
                    <IconStethoscope size={28} stroke={1.5} />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-1 tracking-tight">
                      {doctorName || "Dr. Ayesha Rahman"}
                    </h3>
                    <span className="inline-flex bg-white dark:bg-neutral-800/80 border border-gray-200/50 dark:border-neutral-700/30 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-xl font-bold tracking-wide shadow-sm">
                      {specialty || "Cardiologist"}
                    </span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-neutral-800 my-5" />

                {/* Additional Details */}
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 relative z-10">
                  {/* Experience Box */}
                  <div className="flex items-center gap-3 bg-white/90 dark:bg-neutral-800/60 border border-gray-100 dark:border-neutral-800/40 px-3 py-2.5 rounded-2xl shadow-sm transition-all duration-300 group-hover:bg-white dark:group-hover:bg-neutral-800">
                    <IconBriefcase size={18} className="text-blue-500 shrink-0" />
                    <p className="font-medium">
                      Experience: <span className="text-gray-900 dark:text-white font-bold">{experience || "10 years"}</span>
                    </p>
                  </div>
                  
                  {/* Hospital Box */}
                  <div className="flex items-center gap-3 bg-white/90 dark:bg-neutral-800/60 border border-gray-100 dark:border-neutral-800/40 px-3 py-2.5 rounded-2xl shadow-sm transition-all duration-300 group-hover:bg-white dark:group-hover:bg-neutral-800">
                    <IconMapPin size={18} className="text-emerald-500 shrink-0" />
                    <p className="line-clamp-1 font-medium">
                      Hospital: <span className="text-gray-900 dark:text-white font-bold">{hospital || "Labaid Hospital"}</span>
                    </p>
                  </div>

                  {/* Visit Fee Box */}
                  <div className="flex items-center gap-3 bg-white/90 dark:bg-neutral-800/60 border border-gray-100 dark:border-neutral-800/40 px-3 py-2.5 rounded-2xl shadow-sm transition-all duration-300 group-hover:bg-white dark:group-hover:bg-neutral-800">
                    <IconCurrencyTaka size={18} className="text-amber-500 shrink-0" stroke={2.5} />
                    <p className="font-medium">
                      Visit Fee: <span className="text-gray-900 dark:text-white font-black text-base">{fee ? parseInt(fee).toLocaleString() : "800"} ৳</span>
                    </p>
                  </div>

                  {/* Rating & Review Box */}
                  <div className="flex items-center gap-3 bg-white/90 dark:bg-neutral-800/60 border border-gray-100 dark:border-neutral-800/40 px-3 py-2.5 rounded-2xl shadow-sm transition-all duration-300 group-hover:bg-white dark:group-hover:bg-neutral-800">
                    <IconStarFilled size={16} className="text-amber-400 shrink-0" />
                    <p className="font-medium">
                      Rating: <span className="font-bold text-gray-900 dark:text-white">{dynamicRating}</span> <span className="text-xs text-gray-400 dark:text-gray-500">({dynamicReviews}+ reviews)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 relative z-10">
                <Link 
                  href={`/allNav/allAppointments/${_id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-neutral-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/20 group/btn"
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