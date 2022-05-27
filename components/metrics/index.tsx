import React from 'react';
import NextImage from 'next/image';

/* This example requires Tailwind CSS v2.0+ */
const metrics = [
  {
    id: 1,
    stat: '30+',
    emphasis: 'transformation projects',
  },
  {
    id: 2,
    stat: '40+',
    emphasis: 'countries around the globe',
  },
  {
    id: 3,
    stat: '200+',
    emphasis: 'workshops moderated',
  },
  {
    id: 4,
    stat: '60+',
    emphasis: 'trainings conducted',
  },
];

const MetricsComponent = () => {
  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8 lg:pb-8 lg:pt-32'>
          <h2 className='text-left text-4xl  text-gray-100 sm:text-center sm:text-5xl lg:text-6xl'>
            100% satisfaction
          </h2>
          <p className='text-left max-w-xl mt-2 mx-auto text-base md:text-lg text-gray-500 sm:text-center'>
            We deliver with passion and full commitment.
          </p>
        </div>

        <div className=' bg-gray-900 items-end max-w-lg mx-auto px-4 sm:px-6 sm:max-w-xl lg:max-w-7xl lg:px-8 xl:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-x-24'>
          <div className='relative xl:col-start-1 '>
            <div className='mt-12 h-full grid grid-cols-2 sm:gap-y-4 gap-y-12 gap-x-6 sm:grid-cols-2'>
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className='block text-4xl  text-indigo-400 md:text-5xl xl:text-5xl'>
                    {item.stat}
                  </span>
                  <span className='mt-1 block text-base tracking-tighter  text-gray-300 md:text-lg md:tracking-normal'>
                    <span className='font-medium text-white'>
                      {item.emphasis}
                    </span>
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className='mx-auto w-full relative items-center md:mt-12'>
            <NextImage
              layout='responsive'
              height={4643}
              width={8119}
              src='/images/metrics-2.png'
              alt='People working on laptops'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MetricsComponent;
