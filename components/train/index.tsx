import React from 'react';
import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';

const TrainComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <div className='max-w-2xl mx-auto  lg:max-w-none'>
        <h2 className='text-2xl font-bold text-gray-200 sm:text-4xl'>
          Experience from more than{' '}
          <span className='text-indigo-400'> 60 trainings </span>and enablement
          sessions.
        </h2>
        <div className='grid grid-cols-1 items-center gap-y-10 gap-x-8 lg:grid-cols-3 lg:mt-24'>
          <div className='col-span-1'>
            <p className='mt-4 text-lg text-gray-400'>
              <div>
                We offer a broad variety of trainings such as SAP
                SuccessFactors, Project Management, Web Development.
                Professional remote or on-site execution of trainings.
              </div>
            </p>
          </div>
          <div className='col-span-2 w-full h-64 relative'>
            <NextImage
              layout='fill'
              src='/images/train.png'
              alt=''
              className='object-contain h-full'
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className='lg:mt-12 max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 lg:hidden'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mt-8 '>
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainComponent;
