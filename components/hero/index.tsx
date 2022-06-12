import React from 'react';
import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';

const HeroComponent = () => {
  return (
    <div className='h-screen w-full verflow-hidden relative'>
      <div
        className='h-full flex justify-center items-center max-w-5xl mx-auto text-center z-10 px-4 
                    sm:px-6 
                    lg:max-w-7xl 
                    lg:px-8'
      >
        <div className='bg-gray-900 flex flex-col items-center '>
          <div
            className='my-24 

          md:my-44
          lg:my-56 '
          >
            <h1
              className=' 
            block  text-indigo-400 
            
            text-4xl 
            xs:text-5xl 
            sm:text-6xl 
            md:text-7xl 
    '
            >
              People-centric Digitalization
            </h1>
            <p
              className='
            block mt-4  tracking-wider uppercase text-gray-400 

            text-xs 
            sm:text-sm 
            md:text-base 
            lg:text-lg'
            >
              Consulting. Training. Development.
            </p>
            <div
              className='
            my-8 relative
            xs:my-12            
            lg:hidden
            '
            >
              <ContactButton />
            </div>
          </div>
          <div
            className='
          absolute inset-x-0 bottom-5 
          
          h-24 
          xs:h-36
          sm:h-40 
          lg:h-48   '
          >
            <NextImage
              layout='fill'
              className='z-10 mx-auto w-full'
              src='/images/bg-3.png'
              alt='People working and reading'
              objectFit='contain'
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
