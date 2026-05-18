import Banner from '@/components/homepage/banner/Banner';
import HomeFetaured from '@/components/homepage/homeFeatured/HomeFetaured';
import HowItWorks from '@/components/homepage/howItWorks/HowItWorks';
import WhyChooseUs from '@/components/homepage/whyChooseUs/WhyChooseUs';
import React from 'react';

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner/>
      <HomeFetaured/>
      <WhyChooseUs/>
      <HowItWorks/>
    </div>
  );
};

export default Home;