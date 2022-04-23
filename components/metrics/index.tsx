import React from 'react';

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
      <section className='pt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:py-10 sm:px-6 lg:px-8'>
          <h2 className='text-left text-4xl font-extrabold text-gray-100 sm:text-center sm:text-5xl sm:tracking-tight lg:text-6xl'>
            100% satisfaction
          </h2>
          <p className='text-left max-w-xl mt-2 mx-auto text-xl text-gray-500 sm:text-center'>
            We deliver with passion and full commitment.
          </p>
        </div>

        <div className=' bg-gray-900 max-w-lg mx-auto px-4 sm:px-6 sm:max-w-xl lg:max-w-7xl lg:px-8 xl:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-x-8'>
          <div className='relative sm:pt-18 sm:py-8 xl:col-start-1 '>
            <div className='mt-12 h-full grid grid-cols-2 gap-y-12 gap-x-6 sm:grid-cols-2'>
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className='block text-4xl font-thin text-indigo-50 md:text-5xl xl:text-6xl'>
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
          <div className='mx-auto h-full '>
            <img
              className='h-full object-cover  opacity-75 '
              src='/images/metrics.png'
              alt='People working on laptops'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MetricsComponent;
