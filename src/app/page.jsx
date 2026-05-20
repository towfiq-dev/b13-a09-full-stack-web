import Banner from '@/components/homepage/banner/Banner';
import HomeFetaured from '@/components/homepage/homeFeatured/HomeFetaured';
import HowItWorks from '@/components/homepage/howItWorks/HowItWorks';
import Support from '@/components/homepage/suppport/Support';
import WhyChooseUs from '@/components/homepage/whyChooseUs/WhyChooseUs';
import React from 'react';

export const metadata = {
  title: "DocBook — Your Trusted Doctor Appointment Platform",
  description: "Book appointments with verified specialist doctors easily. Browse top medical professionals and schedule your health checkup today.",
  keywords: ["doctor appointment", "book doctor", "specialist booking", "healthcare platform"],
  openGraph: {
    title: "DocBook — Your Trusted Doctor Appointment Platform",
    description: "Browse verified doctors and book your appointment in minutes.",
    type: "website",
  },
};

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner/>
      <HomeFetaured/>
      <Support/>
      <WhyChooseUs/>
      <HowItWorks/>
    </div>
  );
};

export default Home;