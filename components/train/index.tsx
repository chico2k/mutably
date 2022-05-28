import React from 'react';
import NextLink from 'next/link';
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
              <div>
                We offer a broad variety of trainings such as as SAP
                SuccessFactors, Project Management, Web Development.
                Professional remote or on-site execution of trainings.
              </div>
            </p>
            <div className='mt-8 lg:hidden'>
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
      <div className='lg:mt-12 max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-gray-200 sm:text-4xl'>
            Experience from more than{' '}
            <span className='text-indigo-400'> 60 trainings </span>and
            enablement sessions.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TrainComponent;
