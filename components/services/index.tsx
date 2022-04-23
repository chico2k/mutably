/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from '@heroicons/react/outline';

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
];
const features = [
  {
    name: 'Advise',
    description:
      'Professional steering and execution of holistic digitalization projects. National to global, public to pharma - we got you covered',
    icon: GlobeAltIcon,
    bullets: [
      'Holistic HR Transformation',
      'SAP SuccessFactors',
      'Validated Learning Management Systems',
      'Reporting & Analytics',
      'Technical integration',
    ],
  },
  {
    name: 'Develop',
    description:
      'Effient and web development with state of the art tools like React, Next.JS and Serverless.',
    icon: ScaleIcon,
    bullets: [
      'React',
      'Next.JS',
      'Serverless',
      'Database & Storage',
      'Integraton',
    ],
  },
  {
    name: 'Train',
    description:
      'We are offering a broad variety of trainings such as as SAP SuccessFactors, Project Management, Web Development and much more.',
    icon: LightningBoltIcon,
    bullets: [
      'SAP SuccessFactors',
      'Project Management',
      'Reporting & Anayltics',
      'Indivdual Coaching',
    ],
  },
];

import React from 'react';

// pt-48 -mt-12 md:-mt-36

const ServicesComponent = () => {
  return (
    <section className='bg-gray-800 pb-36  pt-32 z -mt-32'>
      <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className=' text-left mb-12 text-4xl font-extrabold tracking-tight text-white sm:text-center md:text-5xl  lg:text-6xl'>
          Our offerings.
        </h2>
        <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16'>
          {features.map((feature) => (
            <div
              key={feature.name}
              className='flex flex-col bg-gray-900  shadow-gray-700/40  rounded-2xl shadow-xl py-8  '
            >
              <div className='flex-1 relative  px-6 pb-8 md:px-8'>
                <h3 className='text-3xl text-indigo-400 font-medium uppercase tracking-wider '>
                  {feature.name}
                </h3>
                <p className='mt-4 text-base text-gray-200'>
                  {feature.description}
                </p>
                <ul className='mt-4 ml-4 '>
                  {feature.bullets.map((bullet) => {
                    return (
                      <div key={bullet} className=''>
                        <li className='text-gray-200 text-sm list-disc'>
                          {bullet}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ServicesComponent;
