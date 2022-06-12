import React from 'react';
import {
  CloudIcon,
  GlobeIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
  UserIcon,
  CalendarIcon,
} from '@heroicons/react/outline';
import { IReferences } from '../../../data/types';

type IProps = {
  references: IReferences[];
};

const ReferenceList: React.FC<IProps> = ({ references }) => {
  return (
    <div className='mt-8 text-gray-100 grid gap-28 lg:gap-32'>
      {references.map((reference, index) => {
        return (
          <div key={index}>
            <div className='flex justify-betwe'>
              <h3 className='font-semibold text-2xl text-indigo-400 tracking-wide uppercase'>
                {reference.name}
              </h3>
            </div>
            <div className='pt-2 '>
              <ul className='grid grid-cols-2 max-w-3xl text-sm lg:text-base'>
                <li className=''>
                  <div className='mt-2 flex'>
                    <div className='flex-shrink-0'>
                      <OfficeBuildingIcon
                        className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-gray-400 items-center flex '>
                      {reference.industry}
                    </div>
                  </div>
                </li>
                <li>
                  <div className='mt-2 flex'>
                    <div className='flex-shrink-0'>
                      <GlobeIcon
                        className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-gray-400 items-center flex'>
                      {reference.projectScope}
                    </div>
                  </div>
                </li>
                <li>
                  <div className='mt-2 flex'>
                    <div className='flex-shrink-0'>
                      <CloudIcon
                        className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-gray-400 items-center flex'>
                      {reference.technology}
                    </div>
                  </div>
                </li>
                <li>
                  <div className='mt-2 flex'>
                    <div className='flex-shrink-0'>
                      <UserGroupIcon
                        className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-gray-400 items-center flex'>
                      {reference.employees} employees
                    </div>
                  </div>
                </li>
                <li>
                  <div className='mt-2 flex'>
                    <div className='flex-shrink-0'>
                      <UserIcon
                        className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-gray-400 items-center flex'>
                      {reference.role}
                    </div>
                  </div>
                </li>
                <li>
                  <div className='mt-2 flex'>
                    <div className='flex-shrink-0'>
                      <CalendarIcon
                        className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3 text-gray-400 items-center flex'>
                      {reference.year}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p className='pt-4 lg:max-w-4xl'>{reference.description}</p>

            <div className='pt-4'>
              {reference.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className='inline-block bg-indigo-200 rounded-full px-3 py-1 text-xs font-semibold text-indigo-900 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReferenceList;
