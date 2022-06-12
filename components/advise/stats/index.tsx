import React from 'react';
import NextLink from 'next/link';

const AdviseStatsComponent = () => {
  return (
    <div className='max-w-7xl  mx-auto text-indigo-400 text-center px-4 pb-12 sm:px-6 lg:px-8 '>
      <NextLink href='/references'>
        <a className=' px-8 text-center py-3 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700'>
          Our References
        </a>
      </NextLink>
    </div>
  );
};

export default AdviseStatsComponent;
