import React from 'react';
import NextImage from 'next/image';

const DevelopmentComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <div className='mx-auto'>
        <h2 className='text-4xl font-extrabold text-gray-100'>We love tech</h2>
      </div>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <NextImage
              className='h-12'
              src='/images/devLogos/react.png'
              alt='Tuple'
              width={100}
              height={100}
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <NextImage
              className='h-12 '
              src='/images/devLogos/next.png'
              alt='Mirage'
              width={100}
              height={100}
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <NextImage
              className='h-12'
              src='/images/devLogos/next.png'
              alt='StaticKit'
              width={100}
              height={100}
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
            <NextImage
              className='h-12'
              src='/images/devLogos/next.png'
              alt='Transistor'
              width={100}
              height={100}
            />
          </div>
          <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
            <NextImage
              className='h-12'
              src='/images/devLogos/next.png'
              alt='Workcation'
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentComponent;
