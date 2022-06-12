import React from 'react';
import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';

const HeroComponent = () => {
  return (
    <div className='relative max-w-5xl mx-auto text-center z-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className=' bg-gray-900 flex flex-col items-center relative'>
        <div className='my-24 md:my-44 lg:my-56'>
          <h1 className='text-4xl tracking-tighter  text-white sm:text-6xl xl:text-5xl'>
            <span className='block text-5xl text-indigo-400 md:text-7xl w-full lg:text-7xl'>
              People-centric Digitalization
            </span>
          </h1>
          <p className='block mt-4 text-sm tracking-wider uppercase text-gray-400 md:text-base lg:text-lg'>
            Consulting. Training. Development.
          </p>
          <div className='my-12 lg:hidden relative'>
            <ContactButton />
          </div>
        </div>
        <div className='w-full h-64 relative'>
          <NextImage
            layout='fill'
            className='z-10'
            src='/images/bg-3.png'
            alt='People working and reading'
            objectFit='contain'
            priority={true}
          />
        </div>
      </div>
      <div className='bg-gray-800 h-12 absolute inset-x-0 -bottom-4 -z-0'></div>
    </div>
  );
};

export default HeroComponent;
