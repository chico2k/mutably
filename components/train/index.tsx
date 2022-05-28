import React from 'react';

import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';

const TrainComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8 min-h-screen'>
      <div className='max-w-2xl mx-auto  lg:max-w-none'>
        <div className='grid grid-cols-1 items-center gap-y-10 gap-x-8 lg:grid-cols-3'>
          <div className='col-span-1'>
            <h2 className='text-5xl font-extrabold tracking-tight text-gray-100'>
              We love sharing our
              <span className=' text-indigo-400'> knowledge.</span>
            </h2>
            <p className='mt-4 text-gray-500'>
              At the beginning at least, but then we realized we could make a
              lot more money if we kinda stopped caring about that. Our new
              strategy is to write a bunch of things that look really good in
              the headlines, then clarify in the small print but hope people
              don`t actually read it.
            </p>
            <div className='mt-8'>
              <ContactButton />
            </div>
          </div>
          <div className='col-span-2'>
            <NextImage
              width={3469}
              height={1755}
              src='/images/train.png'
              alt=''
              className='object-center h-full'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainComponent;
