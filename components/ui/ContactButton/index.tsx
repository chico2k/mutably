import React from 'react';
import NextLink from 'next/link';

const ContactButton = () => {
  return (
    <NextLink href='contact'>
      <a className='px-8 text-center w-full py-3 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700'>
        Contact us
      </a>
    </NextLink>
  );
};

export default ContactButton;
