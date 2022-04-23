import React from 'react';
import { references } from '../../data/references';
import ReferenceList from './referenceList';

const ReferencesComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <div className='mx-auto'>
        <h2 className='text-4xl font-extrabold text-gray-100 mb-28'>
          Our referenes from the past
        </h2>
        <ReferenceList references={references} />
        <div className='text-sm text-gray-500 mt-36 max-w-4xl'>
          <span>
            ** Disclaimer: References are potentially subject to invidual work
            experiences of our employees and partners. They may have been done
            by the employees within their previous work experiences or in
            coperation with other consultancies. Mutably only refers to the
            individual roles of our employees and partners within those
            projects. **
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReferencesComponent;
