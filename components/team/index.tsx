import NextLink from 'next/link';
import NextImage from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import { EMPLOYEE_DATA } from '../../data/employees';

const TeamComponent = () => {
  return (
    <div className='max-w-7xl mx-auto my-16 px-4 sm:px-6 md:my-24 lg:px-8 '>
      <ul
        role='list'
        className='mt-8 sm:mt-12 grid grid-cols-1 gap-8 space-y-12 sm:space-y-0 lg:gap-x-8 lg:space-y-0 relative'
      >
        {Object.keys(EMPLOYEE_DATA).map((key) => {
          const person = EMPLOYEE_DATA[key];
          return (
            <li key={person.name} className='sm:py-8'>
              <div className=' w-fullspace-y-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0'>
                <div className='w-full md:w-4/5 aspect-square relative  overflow-hidden '>
                  <NextImage
                    layout='fill'
                    className='shadow-lg object-cover rounded-lg  object-center'
                    src={person.imageUrl}
                    alt={`${person.name} Profile Picture`}
                    priority={true}
                    blurDataURL={person.imageBlur}
                    placeholder='blur'
                  />
                </div>
                <div className='mt-16  pb-32  sm:col-span-2 sm:mt-0'>
                  <div className='space-y-10'>
                    <div className='text-4xl leading-6 font-medium space-y-1 text-indigo-400 mb-6 uppercase'>
                      <NextLink href={person.detailUrl}>
                        <a>
                          <h2>{person.name}</h2>
                        </a>
                      </NextLink>
                    </div>
                    <p className='text-gray-200 max-w-2xl text-base'>
                      {person.bio}
                    </p>
                  </div>
                  <NextLink href={person.detailUrl}>
                    <a className='mt-2 text-base inline-flex items-center text-gray-500 transition-all rounded-md group hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-indigo-500"'>
                      <span>
                        <ArrowNarrowRightIcon className='border-gray-700 hover:text-indigo-300  h-5 w-5' />
                      </span>
                      <span className=' ml-1 -mr-1 '>more</span>
                    </a>
                  </NextLink>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamComponent;
