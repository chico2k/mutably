import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NextLink from 'next/link';
import ContactButton from '../ui/ContactButton';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Advise', href: '/advise' },
  { name: 'Develop', href: '/develop' },
  { name: 'Train', href: '/train' },
  { name: 'Team', href: '/team' },
  { name: 'References', href: '/references' },
];

const Navigation = () => {
  const router = useRouter();

  console.log('router', router);

  return (
    <Popover as='header' className='relative'>
      <div className='bg-gray-900 pt-6'>
        <nav
          className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <NextLink href='/'>
                <a>
                  <span className='sr-only'>Workflow</span>
                  <NextImage
                    width={100}
                    height={100}
                    className='h-8 w-auto sm:h-10'
                    src='/logo/1.png'
                    alt=''
                  />
                </a>
              </NextLink>
              <div className='-mr-2 flex items-center md:hidden'>
                <Popover.Button className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='hidden space-x-7 md:flex md:ml-6 lg:space-x-10'>
              {navigation.map((item) => {
                const active =
                  router.pathname === item.href
                    ? `text-base font-semibold text-indigo-400  border-b-2 border-indigo-400 `
                    : `text-base font-medium text-white hover:text-gray-300 `;

                return (
                  <NextLink href={item.href} key={item.name}>
                    <a className={active}>{item.name}</a>
                  </NextLink>
                );
              })}
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <ContactButton />
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden'
        >
          <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div>
                <NextImage className='h-8 w-auto' src='/logo/1.png' alt='' />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='pt-5 pb-6'>
              <div className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='mt-6 px-5'>
                <NextLink href='/contact'>
                  <a className='block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700'>
                    Contact us
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navigation;
