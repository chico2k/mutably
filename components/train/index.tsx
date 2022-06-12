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
        <div className='md:grid md:grid-cols-2 h-full'>
          <div className='col-span-1 w-full h-32 lg:h-80 relative self-center  '>
            <NextImage
              layout='fill'
              src='/images/train.png'
              alt=''
              className='object-contain h-full'
              priority={true}
            />
          </div>
          <div
            className='text-gray-300 text-sm my-8 max-w-3xl mx-auto h-full
        xs:text-base
        lg:text-left lg:text-xl lg:flex lg:items-center'
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
