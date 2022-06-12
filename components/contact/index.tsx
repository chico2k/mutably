import React, { useState } from 'react';
import ContactForm from './ContactForm';

const ContactComponent = () => {
  const [success, setSuccess] = useState(false);

  return (
    <section className='relative my-32 max-w-3xl mx-auto md:text-center  px-4 sm:py-10 sm:px-6 lg:px-8 lg:mt-48'>
      <div className=' lg:text-center  pt-16 lg:pb-8 lg:pt-32 bg-gray-900 items-end max-w-lg mx-auto sm:max-w-xl lg:max-w-7xl lg:px-8 xl:max-w-7xl '>
        {success ? (
          <h2 className='text-left mt-1 text-3xl  text-gray-100  md:text-center sm:text-4xl lg:text-5xl '>
            Thanks for contacting us.
          </h2>
        ) : (
          <h2 className='text-left mt-1 text-4xl  md:text-center text-gray-100 sm:text-5xl lg:text-6xl '>
            Get in touch with us.
          </h2>
        )}
      </div>

      <div className='bg-gray-900 py-10  lg:col-span-3 lg:py-12'>
        <div className='max-w-lg mx-auto lg:max-w-none'>
          <ContactForm setSuccess={setSuccess} success={success} />
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
