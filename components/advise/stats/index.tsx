import React from 'react';
import NextLink from 'next/link';

const AdviseStatsComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-2xl font-bold text-gray-200 sm:text-4xl'>
          Experience from more than 30 digialization transformation projects.
        </h2>
        <div className='mt-12 text-indigo-400'>
          <NextLink href='/references'>
            <a className=' px-8 text-center w-full py-3 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700'>
              Our References
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default AdviseStatsComponent;
