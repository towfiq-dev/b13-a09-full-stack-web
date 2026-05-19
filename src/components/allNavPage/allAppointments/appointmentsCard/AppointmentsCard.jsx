import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
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

const AppointmentsCard = ({ appointment, index = 0 }) => {
  const {
    _id,
    doctorName,
    specialty,
    experience,
    hospital,
    fee
  } = appointment;

  const uniqueSeed = _id ? _id.toString().charCodeAt(_id.toString().length - 1) : index;
  const dynamicRating = (4.5 + (uniqueSeed % 5) * 0.1).toFixed(1);
  const dynamicReviews = 30 + (uniqueSeed % 7) * 11;

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

  const bgStyles = [
    "bg-gradient-to-br from-blue-50/90 via-white to-blue-50/40 border-blue-100/70 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/50 dark:border-blue-950/50",
    "bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 border-emerald-100/70 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/50 dark:border-emerald-950/50",
    "bg-gradient-to-br from-purple-50/90 via-white to-purple-50/40 border-purple-100/70 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950/50 dark:border-purple-950/50"
  ];
  const currentBgStyle = bgStyles[uniqueSeed % bgStyles.length];

  return (

    <div 
      className={`group relative ${currentBgStyle} border-2 rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between pt-10 mt-4`}
    >

      <div className={`absolute -top-3.5 left-6 inline-flex items-center gap-1.5 bg-gradient-to-r ${badgeConfig.className} text-xs font-black px-4 py-1.5 rounded-full shadow-lg transform group-hover:-translate-y-0.5 transition-all duration-300 z-20`}>
        {badgeConfig.icon}
        <span className="tracking-wide uppercase text-[10px]">{badgeConfig.text}</span>
      </div>

      <div>
        {/* Doctor Avatar & Basic Info */}
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

        {/* Additional Details Section */}
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
};

export default AppointmentsCard;