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
    <section className="relative overflow-x-hidden py-14 sm:py-16 lg:py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400">
            Meet Our Experts
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Top-Rated Specialists
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Discover our highly recommended medical experts, selected based on
            exceptional patient ratings and trusted feedback.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 pt-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {featureds?.map((featured, index) => {
            const {
              _id,
              doctorName,
              specialty,
              experience,
              hospital,
              fee
            } = featured;

            // Dynamic Rating & Reviews
            const uniqueSeed = _id
              ? _id.toString().charCodeAt(_id.toString().length - 1)
              : index;

            const dynamicRating =
              featured.rating ||
              (4.5 + (uniqueSeed % 5) * 0.1).toFixed(1);

            const dynamicReviews =
              featured.reviews ||
              35 + index * 12 + ((uniqueSeed % 3) * 7);

            // Badge Config
            const badgeType = uniqueSeed % 3;

            let badgeConfig = {
              text: 'Top Verified',
              icon: (
                <IconMedal
                  size={14}
                  stroke={2.5}
                  className="animate-bounce"
                />
              ),
              className:
                'from-amber-500 via-orange-500 to-yellow-500 text-white ring-amber-500/20'
            };

            if (badgeType === 1) {
              badgeConfig = {
                text: 'Highly Recommended',
                icon: (
                  <IconCircleCheckFilled
                    size={14}
                    className="animate-pulse"
                  />
                ),
                className:
                  'from-emerald-500 via-teal-500 to-cyan-500 text-white ring-emerald-500/20'
              };
            } else if (badgeType === 2) {
              badgeConfig = {
                text: 'Super Expert',
                icon: <IconCrown size={14} />,
                className:
                  'from-violet-600 via-purple-500 to-fuchsia-500 text-white ring-violet-500/20'
              };
            }

            // Background Styles
            const bgStyles = [
              'from-blue-50/90 via-white to-blue-100/40 border-blue-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 dark:border-blue-950/40',
              'from-emerald-50/90 via-white to-emerald-100/40 border-emerald-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 dark:border-emerald-950/40',
              'from-purple-50/90 via-white to-purple-100/40 border-purple-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 dark:border-purple-950/40'
            ];

            const currentBgStyle =
              bgStyles[uniqueSeed % bgStyles.length];

            return (
              <div
                key={_id}
                className={`group relative flex h-full flex-col justify-between rounded-3xl border bg-gradient-to-br ${currentBgStyle} p-5 pt-10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:shadow-black/30 sm:p-6 sm:pt-11`}
              >
                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                {/* Floating Badge */}
                <div
                  className={`absolute left-5 -top-3 z-30 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1.5 text-[10px] font-black uppercase tracking-wide shadow-xl ring-4 ${badgeConfig.className}`}
                >
                  {badgeConfig.icon}
                  <span>{badgeConfig.text}</span>
                </div>

                <div>
                  {/* Doctor Profile */}
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                      <IconStethoscope size={28} stroke={1.7} />
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-xl">
                        {doctorName || 'Dr. Ayesha Rahman'}
                      </h3>

                      <div className="mt-2 inline-flex max-w-full items-center rounded-xl border border-gray-200 bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-blue-600 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-blue-400">
                        <span className="truncate">
                          {specialty || 'Cardiologist'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-neutral-800" />

                  {/* Details */}
                  <div className="space-y-3">
                    {/* Experience */}
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/90 px-3 py-3 shadow-sm transition-all duration-300 group-hover:bg-white dark:border-neutral-800 dark:bg-neutral-800/70 dark:group-hover:bg-neutral-800">
                      <IconBriefcase
                        size={18}
                        className="shrink-0 text-blue-500"
                      />

                      <p className="min-w-0 text-sm font-medium text-gray-600 dark:text-gray-300">
                        Experience:{' '}
                        <span className="font-bold text-gray-900 dark:text-white">
                          {experience || '10 years'}
                        </span>
                      </p>
                    </div>

                    {/* Hospital */}
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/90 px-3 py-3 shadow-sm transition-all duration-300 group-hover:bg-white dark:border-neutral-800 dark:bg-neutral-800/70 dark:group-hover:bg-neutral-800">
                      <IconMapPin
                        size={18}
                        className="shrink-0 text-emerald-500"
                      />

                      <p className="min-w-0 truncate text-sm font-medium text-gray-600 dark:text-gray-300">
                        Hospital:{' '}
                        <span className="font-bold text-gray-900 dark:text-white">
                          {hospital || 'Labaid Hospital'}
                        </span>
                      </p>
                    </div>

                    {/* Fee */}
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/90 px-3 py-3 shadow-sm transition-all duration-300 group-hover:bg-white dark:border-neutral-800 dark:bg-neutral-800/70 dark:group-hover:bg-neutral-800">
                      <IconCurrencyTaka
                        size={18}
                        stroke={2.5}
                        className="shrink-0 text-amber-500"
                      />

                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Visit Fee:{' '}
                        <span className="text-base font-black text-gray-900 dark:text-white">
                          {fee
                            ? parseInt(fee).toLocaleString()
                            : '800'}{' '}
                          ৳
                        </span>
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/90 px-3 py-3 shadow-sm transition-all duration-300 group-hover:bg-white dark:border-neutral-800 dark:bg-neutral-800/70 dark:group-hover:bg-neutral-800">
                      <IconStarFilled
                        size={17}
                        className="shrink-0 text-amber-400"
                      />

                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Rating:{' '}
                        <span className="font-bold text-gray-900 dark:text-white">
                          {dynamicRating}
                        </span>{' '}
                        <span className="text-xs text-gray-400">
                          ({dynamicReviews}+ reviews)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-7">
                  <Link
                    href={`/allNav/allAppointments/${_id}`}
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 dark:bg-neutral-800 dark:hover:bg-blue-600 sm:text-base"
                  >
                    <span>View Details</span>

                    <IconArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;