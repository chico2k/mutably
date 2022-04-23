import NextLink from 'next/link';

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
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <div className='mx-auto'>
        <h2 className='text-4xl font-extrabold text-gray-100'>
          Meet the leadership
        </h2>
      </div>
      <div className='space-y-12 mt-12  lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
        <div className='lg:col-span-2'>
          <ul
            role='list'
            className='space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0'
          >
            {people.map((person) => (
              <li key={person.name} className='sm:py-8'>
                <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
                  <div className=''>
                    <img
                      className='object-cover shadow-lg rounded-lg aspect-square'
                      src={person.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='space-y-4'>
                      <div className='text-3xl leading-6 font-medium space-y-1 text-indigo-200 mb-6'>
                        <h3>{person.name}</h3>
                      </div>
                      <div className='text-base'>
                        <p className='text-gray-200'>{person.bio}</p>
                      </div>
                      <div className='mt-4 font-medium'>
                        <NextLink href={person.detailUrl}>
                          <a className='text-indigo-300'>Click for more</a>
                        </NextLink>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
