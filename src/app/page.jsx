import Banner from '@/components/homepage/banner/Banner';
import HomeFetaured from '@/components/homepage/homeFeatured/HomeFetaured';
import React from 'react';

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner/>
      <HomeFetaured/>
    </div>
  );
};

export default Home;