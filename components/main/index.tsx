import React from 'react';
import NextLink from 'next/link';

export const Main = () => {
  return (
    <main className=' bg-gray-600 w-full flex items-center justify-center fixed inset-0 '>
      <div className=''>
        <h1 className='text-white text-7xl font-sans'>mutably</h1>
        <h2 className='text-center text-gray-400'>digital | change | tech </h2>
        <div className='pt-8 text-center text-gray-400'>
          soon more ... 👷‍♂️ 🚧
        </div>
      </div>
      <span className='absolute bottom-0 mb-4 flex gap-4'>
        <NextLink href='/impressum'>Impressum</NextLink>
        <NextLink href='/datenschutz'>Datenschutz</NextLink>
      </span>
    </main>
  );
};
