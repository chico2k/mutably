import NextLink from 'next/link';
import NextImage from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

type IPeople = {
  name: string;
  imageUrl: string;
  bio: string;
  detailUrl: string;
};

const people: IPeople[] = [
  {
    name: 'Mario Galla',
    imageUrl: '/images/mgalla.jpg',
    bio: 'More than nine years of consulting experience in different roles and markets. As digital native and tech lover fully commited to digialize the world.',
    detailUrl: '/team/mario-galla',
  },
];

const TeamComponent = () => {
  return (
    <div className='max-w-7xl mx-auto my-16 px-4 sm:px-6 md:my-24 lg:px-8 '>
      <h2 className='text-4xl py-8 font-extrabold text-gray-100'>
        Meet the leadership
      </h2>
      <ul
        role='list'
        className='mt-8 sm:mt-12 grid grid-cols-1 gap-8 space-y-12 sm:space-y-0 lg:gap-x-8 lg:space-y-0 relative'
      >
        {people.map((person) => (
          <li key={person.name} className='sm:py-8'>
            <div className=' w-fullspace-y-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0'>
              <div className='w-full md:w-4/5 aspect-square relative  overflow-hidden '>
                <NextImage
                  layout='fill'
                  className='shadow-lg object-cover rounded-lg  object-center '
                  src={person.imageUrl}
                  alt={`${person.name}Profile Picture`}
                  priority={true}
                />
              </div>
              <div className='mt-16  pb-32  sm:col-span-2 sm:mt-0'>
                <div className='space-y-4'>
                  <div className='text-3xl leading-6 font-medium space-y-1 text-indigo-400 mb-6 uppercase'>
                    <h3>{person.name}</h3>
                  </div>
                  <div className='text-base'>
                    <p className='text-gray-200 max-w-2xl'>{person.bio}</p>
                  </div>
                  <div className='pt-4 font-medium'>
                    <NextLink href={person.detailUrl}>
                      <a className='inline-flex items-center text-indigo-400 transition-all rounded-lg  border-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-indigo-500"'>
                        <span className=''>Click for more</span>
                        <span>
                          <ArrowNarrowRightIcon className='ml-2 -mr-1 h-5 w-5' />
                        </span>
                      </a>
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamComponent;
