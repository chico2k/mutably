import React from 'react';

const ContactComponent = () => {
  return (
    <div className='relative bg-gray-900 mt-52'>
      <div className='absolute inset-0'>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-gray-900' />
      </div>
      <div className='relative max-w-3xl mx-auto '>
        <h2 className='mt-1 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl text-center'>
          Get in touch
        </h2>
        <div className='bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
          <div className='max-w-lg mx-auto lg:max-w-none'>
            <form action='#' method='POST' className='grid grid-cols-1 gap-y-6'>
              <div>
                <label
                  htmlFor='full-name'
                  className='block text-sm font-medium text-gray-200 mb-2'
                >
                  Full name
                </label>
                <input
                  type='text'
                  name='full-name'
                  id='full-name'
                  autoComplete='name'
                  className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-200 mb-2'
                >
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-200 mb-2'
                >
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                />
              </div>
              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-200 mb-2'
                >
                  Company
                </label>
                <input
                  type='text'
                  name='company'
                  id='company'
                  autoComplete='tel'
                  className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-200 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
