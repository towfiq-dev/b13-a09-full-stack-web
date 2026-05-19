'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Modern Doctor Appointment Booking Platform',
    subtitle: 'DocAppointment',
    desc: 'Smart healthcare management system designed to simplify patient appointments, doctor scheduling, and hospital operations.',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Digital Healthcare Experience For Everyone',
    subtitle: 'Smart Clinic Solution',
    desc: 'Manage appointments, patients, doctors, reports, and schedules with a stunning modern interface.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Powerful Hospital Management Dashboard',
    subtitle: 'Next Generation System',
    desc: 'Boost hospital productivity and improve patient experience using intelligent automation tools.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[140px] rounded-full z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/15 blur-[140px] rounded-full z-10 pointer-events-none"></div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen flex items-center">
              
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Overlay - Directly over the image */}
                <div className="absolute inset-0 bg-black/65"></div>
              </div>

              {/* Content Container - Brought to top layer with z-20 */}
              <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white"
                >
                  <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm mb-6 pointer-events-none">
                    Ultimate Medical Toolkit
                  </span>

                  {/* Fixed Title Issue (Showing full title clearly) */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-md">
                    {slide.title}{' '}
                    <span className="block text-cyan-400 mt-2">
                      {slide.subtitle}
                    </span>
                  </h1>

                  <p className="mt-6 text-gray-200 max-w-xl leading-relaxed text-lg drop-shadow">
                    {slide.desc}
                  </p>
                  {/* Buttons - Fully Clickable Now */}
                  <div className="mt-10 flex flex-wrap gap-5 relative z-30">
                    <button
                      className="group cursor-pointer px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center gap-3 hover:scale-105 duration-300 shadow-[0_0_30px_rgba(0,191,255,0.4)] active:scale-95"
                    >
                      <FaPlay className="text-xs" />
                      Live Demo
                    </button>
                    <Link href={'/allNav/appointment'}>
                    <button
                      className="group cursor-pointer px-7 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold flex items-center gap-3 hover:bg-cyan-500 hover:border-cyan-500 duration-300 active:scale-95"
                    >
                      Get Started
                      <FaArrowRight className="group-hover:translate-x-1 duration-300" />
                    </button>
                    </Link>
                  </div>
                </motion.div>

                {/* Right Side Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="hidden lg:flex justify-center"
                >
                  <div className="relative w-[450px] h-[450px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,191,255,0.15)]">
                    <Image
                      src={slide.image}
                      alt="doctor-card"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Floating Card */}
                    <div className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-black/50 backdrop-blur-lg border border-white/10">
                      <h3 className="text-white text-xl font-bold">
                        {slide.subtitle}
                      </h3>
                      <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                        Modern healthcare solution for clinics and hospitals.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}