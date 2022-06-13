import React from 'react';
import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';
import ComponentWrapper from '../Layout/ComponentWrapper';
import ComponentSubtitle from '../Layout/ComponentSubTitle';

const TrainComponent = () => {
  return (
    <ComponentWrapper>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
        <ComponentSubtitle>
          Experience from more than{' '}
          <span className='text-indigo-400'> 60 trainings </span>and enablement
          sessions.
        </ComponentSubtitle>
        <div className='md:grid md:grid-cols-5 h-full  gap-4 items-center'>
          <div
            className='col-span-2 w-full h-48 relative self-center 
            sm:h-54
          md:h-64'
          >
            <NextImage
              layout='fill'
              src='/images/train.png'
              alt=''
              className='object-contain h-full object-left'
              priority={true}
            />
          </div>
          <div
            className='col-span-3 text-gray-300 text-base  max-w-md my-8
            
            lg:text-left lg:text-lg lg:flex lg:items-center'
          >
            We offer a broad variety of trainings such as SAP SuccessFactors,
            Project Management, Web Development. Professional remote or on-site
            execution of trainings.
            <div
              className='mt-8 mx-auto 
               lg:mt-10 lg:hidden '
            >
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TrainComponent;
