import React from 'react';
import { references } from '../../data/references';
import { IDetailFields } from '../../data/types';
import ReferenceList from '../references/referenceList';
import {
  CheckIcon,
  LocationMarkerIcon,
  AcademicCapIcon,
} from '@heroicons/react/solid';
import DetailDividerComponent from './Components/divider';
import PreviousWorkExperienceComponent from './Components/prevExperience';
import { UserIcon } from '@heroicons/react/outline';
import NextImage from 'next/image';

type IProps = {
  detailData: IDetailFields;
};

const DetailComponent: React.FC<IProps> = ({ detailData }) => {
  const referencList = references.filter(
    (reference) => reference.referenceEmployee === detailData
  );

  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <div className='mx-auto'>
        <h2 className='text-4xl font-extrabold text-gray-100'>
          {detailData.name}
        </h2>
      </div>
      <div className='space-y-12 mt-12  lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
        <div className='lg:col-span-2'>
          <ul
            role='list'
            className='space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0'
          >
            <div className='relative  w-full md:w-4/5 aspect-square r space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
              <div className=''>
                <NextImage
                  layout='fill'
                  className='object-cover shadow-lg rounded-lg'
                  src={detailData.imageUrl}
                  alt={`${detailData.name}Profile Picture`}
                />
              </div>
              <div className='sm:col-span-2'>
                <div className='space-y-4'>
                  <div className='text-base'>
                    <p className='text-gray-200'>{detailData.bio}</p>
                  </div>
                </div>
                <div className='text-gray-100 mt-4'>
                  <div className='pt-2 '>
                    <ul className='max-w-3xl text-sm lg:text-base'>
                      <li className=''>
                        <div className='mt-2 flex'>
                          <div className='flex-shrink-0'>
                            <UserIcon
                              className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                              aria-hidden='true'
                            />
                          </div>
                          <div className='ml-3 text-gray-500'>
                            <p>{detailData.role}</p>
                          </div>
                        </div>
                      </li>
                      <li className=''>
                        <div className='mt-2 flex'>
                          <div className='flex-shrink-0'>
                            <LocationMarkerIcon
                              className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                              aria-hidden='true'
                            />
                          </div>
                          <div className='ml-3 text-gray-500'>
                            <p>{detailData.location}</p>
                          </div>
                        </div>
                      </li>
                      <li className=''>
                        <div className='mt-2 flex'>
                          <div className='flex-shrink-0'>
                            <AcademicCapIcon
                              className='h-6 w-6 lg:h-7 lg:w-7 text-gray-400'
                              aria-hidden='true'
                            />
                          </div>
                          <div className='ml-3 text-gray-500'>
                            <p>{detailData.education}</p>
                          </div>
                        </div>
                      </li>
                      <li className=''>
                        <div className='mt-2 flex pl-6'>
                          <div className='ml-3 text-gray-500'>
                            <p>
                              {detailData.languages.map((language, index) => (
                                <span
                                  key={index}
                                  className='inline-block bg-indigo-500 rounded-full px-3 py-1 text-xs font-semibold text-indigo-200 mr-2 mb-2'
                                >
                                  {language}
                                </span>
                              ))}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <DetailDividerComponent title={'Focus Areas'}>
        <ul>
          {detailData.focusAreas.map((focusArea, index) => (
            <div
              key={index}
              className='inline-block bg-indigo-100 rounded-full px-3 py-1 text-xs font-semibold text-indigo-900 mr-2 mb-2'
            >
              {focusArea}
            </div>
          ))}
        </ul>
      </DetailDividerComponent>

      <DetailDividerComponent title={'CERTIFICATES'}>
        <div className='text-base text-gray-100 mt-4'>
          {detailData.certificates.map((certificate, index) => (
            <div key={index} className='flex'>
              <CheckIcon
                className='absolute h-6 w-6 text-indigo-400'
                aria-hidden='true'
              />
              <span className='ml-9 text-base leading-6 '>{certificate}</span>
            </div>
          ))}
        </div>
      </DetailDividerComponent>

      <DetailDividerComponent title={'Previous Work Experience'}>
        <PreviousWorkExperienceComponent
          previousWorkExperience={detailData.previousWorkExperience}
        />
      </DetailDividerComponent>

      <DetailDividerComponent title={'Projects'}>
        <ReferenceList references={referencList} />
      </DetailDividerComponent>
    </div>
  );
};

export default DetailComponent;
