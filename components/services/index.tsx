import React from 'react';
import {
  UserGroupIcon,
  AcademicCapIcon,
  CloudUploadIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Advise',
    description:
      'Professional steering and advise of holistic digitalization projects in Humman Resources. From National to global, from public to pharma.',
    icon: UserGroupIcon,
    bullets: [
      'Holistic HR Transformation',
      'Implementation Planning',
      'SAP SuccessFactors',
      'Validated LMS',
      'Reporting & Analytics',
      'Technical Infrastructure',
    ],
  },
  {
    name: 'Develop',
    description:
      'Infrastructure & Integration design as well as efficient and fast development with state of the art tools like React, Next.JS and Serverless.',
    icon: CloudUploadIcon,
    bullets: [
      'Integration',
      'React',
      'Next.js',
      'Serverless',
      'Database & Storage',
      'Infastructure as a Service',
    ],
  },
  {
    name: 'Train',
    description:
      'Broad variety of trainings such as as SAP SuccessFactors, Project Management, Web Development. Professional remote or on-site execution of trainings.',
    icon: AcademicCapIcon,
    bullets: [
      'SAP SuccessFactors',
      'Project Management',
      'Reporting & Analytics',
      'Development',
      'Design Fundamentals',
      'Indivdual Coaching',
    ],
  },
];

const ServicesComponent = () => {
  return (
    <section className='-mt-8 bg-gray-800 pb-36 pt-32'>
      <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className=' text-left mb-16 text-4xl text-white lg:text-center md:text-5xl md:mb-24 lg:text-6xl'>
          Our offerings.
        </h2>

        <dl className='space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10'>
          {features.map((feature) => (
            <div
              key={feature.name}
              className='flex flex-col bg-gray-900  shadow-gray-700/40  rounded-2xl shadow-xl py-8  '
            >
              <div className='flex-1 relative px-6 md:px-10'>
                <div className='lg:grid lg:grid-rows-2 h-full pt-2'>
                  <div>
                    <h3 className='text-3xl text-indigo-400 font-medium uppercase tracking-wider '>
                      {feature.name}
                    </h3>
                    {/* Divider */}
                    <div className='relative'>
                      <div
                        className='absolute inset-0 flex items-center'
                        aria-hidden='true'
                      >
                        <div className='w-full border-t border-gray-500' />
                      </div>
                      <div className='relative flex justify-end'>
                        <span className='bg-gray-900 pl-2 -mr-1 text-gray-500'>
                          <feature.icon
                            width={28}
                            height={28}
                            strokeWidth={1.3}
                          />
                        </span>
                      </div>
                    </div>

                    <p className='mb-8 mt-4 text-sm text-gray-300  lg:mb-0 '>
                      {feature.description}
                    </p>
                  </div>
                  <div>
                    {/* List */}

                    <ul className='mt-5 ml-4 '>
                      {feature.bullets.map((bullet) => {
                        return (
                          <div key={bullet} className=''>
                            <li className='text-gray-300 text-sm list-disc mb-1'>
                              {bullet}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ServicesComponent;
