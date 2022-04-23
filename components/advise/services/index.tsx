import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'Project Management',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'SAP SuccessFactors',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'Validated Learning',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Implementation Planning',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Reporting & Analytics',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Moderation',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Preparation',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Change Mangement',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
];

const ServicesDetailComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <div className='mx-auto'>
        <h2 className='text-4xl font-extrabold text-gray-100'>All-in-one </h2>
      </div>
      <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
        {features.map((feature) => (
          <div key={feature.name} className='relative'>
            <dt>
              <CheckIcon
                className='absolute h-6 w-6 text-indigo-400'
                aria-hidden='true'
              />
              <p className='ml-9 text-lg leading-6 font-medium text-indigo-400'>
                {feature.name}
              </p>
            </dt>
            <dd className='mt-2 ml-9 text-base text-gray-100'>
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default ServicesDetailComponent;
