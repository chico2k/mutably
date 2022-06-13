import React from 'react';
import { IDetailFieldsPreviousExperience } from '../../../data/types';
import { HomeIcon } from '@heroicons/react/outline';

export type IProps = {
  previousWorkExperience: Array<IDetailFieldsPreviousExperience>;
};

const PreviousWorkExperienceComponent: React.FC<IProps> = ({
  previousWorkExperience,
}) => {
  return (
    <div className='flow-root max-w-3xl mt-12'>
      <ul role='list' className='-mb-8'>
        {previousWorkExperience.map((event, eventIdx) => (
          <li key={event.id}>
            <div className='relative pb-12'>
              {eventIdx !== previousWorkExperience.length - 1 ? (
                <span
                  className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              <div className='relative flex space-x-3'>
                <div>
                  <span
                    className={
                      'h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-white bg-gray-500'
                    }
                  >
                    <HomeIcon
                      className='h-5 w-5 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='min-w-0 flex-1  flex justify-between space-x-4 pl-6'>
                  <div>
                    <p className='text-lg text-gray-50 font-semi tracking-wider '>
                      {event.name}{' '}
                    </p>
                    <div className='text-gray-400 '>{event.role}</div>
                    <span className='text-gray-400 text-sm'>
                      <time dateTime={event.from}>{event.from}</time> -{' '}
                      <time dateTime={event.to}>{event.to}</time>
                    </span>
                    <div className='text-gray-400 '>{event.location}</div>
                  </div>
                  <div className='text-right text-sm whitespace-nowrap text-gray-500'></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousWorkExperienceComponent;
