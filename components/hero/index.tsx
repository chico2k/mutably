import React from 'react';
import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';
const HeroComponent = () => {
  return (
    <div
      className='w-full max-w-5xl mx-auto text-left z-10 px-4 h-screen flex justify-center
                    sm:px-6
                    lg:max-w-7xl lg:text-center
                    lg:px-8'
    >
      <div
        className='bg-gray-900 h-full flex flex-col items-center justify-center relative px-4
      sm:px-6 sm:max-w-xl lg:max-w-7xl lg:px-8 xl:max-w-7xl'
      >
        <div className='mt-8 lg:mt-44'>
          <h1
            className='
            mt-12
            block  text-indigo-400
            text-4xl
            xs:text-5xl
            sm:text-6xl sm:mt-28
            md:text-6xl
    '
          >
            People-centric Digitalization
          </h1>
          <p
            className='
            block mt-3  uppercase text-gray-400

            text-xs
            sm:text-lg
            md:text-lg
            lg:text-xl'
          >
            Consulting. Training. Development.
          </p>
          <div
            className='
            my-8
            xs:my-10
            lg:hidden
            '
          >
            <ContactButton />
          </div>
        </div>
        <div
          className='
                relative  w-full h-24 mt-6
                xs:h-36
                sm:h-40
                lg:h-36   lg:mt-32
                xl:h-48   xl:mt-36'
        >
          <NextImage
            layout='fill'
            className='z-10 mx-auto w-full object-left lg:object-center'
            src='/images/hero.png'
            alt='People working and reading'
            objectFit='contain'
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
