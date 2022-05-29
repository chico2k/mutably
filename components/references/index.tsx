import React from 'react';
import { references } from '../../data/references';
import ReferenceList from './referenceList';

const ReferencesComponent = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 '>
      <div className='mx-auto'>
        <h2 className='sr-only'>Referenes from mutably</h2>
        <ReferenceList references={references} />
        <div className='text-sm text-gray-500 mt-36 max-w-4xl'>
          <span>
            ** Disclaimer: References might be subject to invidual work
            experiences of our employees and partners. They may have been done
            by the employees within their previous work experiences or in
            coperation with other consultancies. We only refers to the
            individual roles within those projects. **
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReferencesComponent;
