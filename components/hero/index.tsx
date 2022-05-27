import React from 'react';
import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';

const HeroComponent = () => {
  return (
    <div className=' overflow-hidden bg-gray-900 h-screen flex items-center relative'>
      <div className='-mt-60 text-center max-w-7xl px-4 mx-auto sm:text-center sm:px-6 lg:px-8 lg:-mt-96'>
        <h1 className='text-4xl tracking-tighter  text-white sm:mt-5 sm:text-6xl xl:text-5xl'>
          <h1>
            <span className='tracking-wider font-light text-lg md:text-xl lg:text-2xl lg:tracking-normal text-gray-400 '>
              mutably
            </span>
            <br />
            <span className=' text-4xl text-indigo-400 md:text-5xl  lg:text-7xl'>
              people-centric digitalization
            </span>
          </h1>
        </h1>
        <p className='block mt-2 text-sm tracking-wider uppercase text-gray-400 md:text-base lg:text-lg'>
          Consulting. Training. Development.
        </p>
        <div className='my-8 md:hidden relative'>
          <ContactButton />
        </div>
      </div>
      <div className='mx-4 absolute inset-x-0 z-10 bottom-20 md:bottom-10 lg:bottom-5'>
        <div className='mx-auto px-12  md:max-w-3xl lg:max-w-6xl h-32 md:h-96 relative md:my-8 '>
          <NextImage
            src='/images/bg-3.png'
            alt='People working and reading'
            objectFit='contain'
            layout='fill'
            priority={true}
          />
        </div>
      </div>
      <div className='bg-gray-800 h-32 absolute inset-x-0 -bottom-4 -z-0 md:h-56 lg:h-40'></div>
    </div>
  );
};

export default HeroComponent;
