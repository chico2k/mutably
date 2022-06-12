import React from 'react';
import NextLink from 'next/link';

const ReferencesButton = () => {
  return (
    <NextLink href='/references'>
      <a
        className='px-4 py-3 text-center w-full  rounded-md shadow bg-indigo-600 text-white font-medium text-sm
        xs:text-base 
        xs:px-8 
      hover:bg-indigo-700'
      >
        Our References
      </a>
    </NextLink>
  );
};

export default ReferencesButton;
