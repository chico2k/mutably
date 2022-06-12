import NextLink from 'next/link';

const navigation = {
  solutions: [
    { name: 'Advise', href: '/advise' },
    { name: 'Develop', href: '/develop' },
    { name: 'Train', href: '/train' },
  ],

  company: [
    { name: 'Team', href: '/team' },
    { name: 'References', href: '/references' },
  ],
  legal: [
    { name: 'About', href: '/about' },
    { name: 'Privacy', href: '/privacy' },
  ],
};

const FooterComponent = () => {
  return (
    <footer className='bg-gray-800' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='pb-8 xl:grid xl:grid-cols-5 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-4'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Solutions
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <NextLink href={item.href}>
                        <a className='text-base text-gray-300 hover:text-white'>
                          {item.name}
                        </a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Company
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <NextLink href={item.href}>
                        <a className='text-base text-gray-300 hover:text-white'>
                          {item.name}
                        </a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Legal
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <NextLink href={item.href}>
                        <a
                          href={item.href}
                          className='text-base text-gray-300 hover:text-white'
                        >
                          {item.name}
                        </a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0'>
          <div>
            <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
              Subscribe to our newsletter
            </h3>
            <p className='mt-2 text-base text-gray-300'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className='mt-4 sm:flex sm:max-w-md lg:mt-0'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              type='email'
              name='email-address'
              id='email-address'
              autoComplete='email'
              required
              className='appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs'
              placeholder='Enter your email'
            />
            <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className='w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
              >
                Subscribe
              </button>
            </div>
          </form>
        </div> */}
        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'>
          <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
            &copy; 2022 mutably GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
