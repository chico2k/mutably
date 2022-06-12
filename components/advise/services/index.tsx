import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'Project Management',
    description:
      'Steering of global as well as national transformation projects.',
  },
  {
    name: 'SAP SuccessFactors',
    description:
      'Digitizing of HR processes in a modern and state of the art cloud solution.',
  },
  {
    name: 'Validated Learning',
    description:
      'Advising in the implementation of a validated Learning Management System for GxP regulated industries.',
  },
  {
    name: 'Implementation Planning',
    description:
      'Roadmap, timeline, approach and resource planning for digitalization projects.',
  },
  {
    name: 'Reporting & Analytics',
    description:
      'Defining reporting strategy including impact on your business & implementing of reports and KPIs.',
  },
  {
    name: 'Integration',
    description: 'Design, Implementation and documentation of integrations.',
  },
  {
    name: 'Cloud Preparation',
    description:
      'Avoiding common challenges during the implementation by a structured cloud preparation phase based on best practices.',
  },
  {
    name: 'Change Mangement',
    description:
      'Dealing with the transition or transformation of an organization`s goals, processes or technologies.',
  },
];

const ServicesDetailComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <h2 className='mb-28 max-auto text-2xl font-extrabold text-gray-100 lg:text-4xl'>
        Experience from more than 30 digitalization transformation projects.
      </h2>
      <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
        {features.map((feature) => (
          <div key={feature.name} className='relative'>
            <dt>
              <CheckIcon
                className='absolute h-6 w-6 text-indigo-400'
                aria-hidden='true'
              />
              <p className='ml-9 text-base leading-6  text-indigo-400 uppercase'>
                {feature.name}
              </p>
            </dt>
            <dd className='mt-2 ml-9 text-sm text-gray-100'>
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default ServicesDetailComponent;
