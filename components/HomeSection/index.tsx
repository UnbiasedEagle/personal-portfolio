import Image from 'next/image';
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section
      id='home'
      className='flex flex-col items-center justify-center h-screen space-y-12 md:flex-row md:space-x-20 md:space-y-0'
    >
      <div className='w-full md:w-7/12'>
        <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:leading-tight md:text-5xl text-secondary'>
          Hi 👋,
          <br />
          My name is <br />
          <span className='text-primary'>Saurabh Singh</span>
          <br />I build things for web
        </h1>
      </div>
      <div className='relative w-full h-48 md:w-5/12 md:block md:h-80'>
        <Image src='/images/banner.svg' priority alt='banner' fill />
      </div>
    </section>
  );
};
export default HomeSection;
