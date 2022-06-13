import React from 'react';
import { references } from '../../data/references';
import ComponentSubtitle from '../Layout/ComponentSubTitle';
import ComponentWrapper from '../Layout/ComponentWrapper';
import ReferenceList from './referenceList';

const ReferencesComponent = () => {
  return (
    <ComponentWrapper>
      <div
        className='max-w-7xl mx-auto py-16 px-4 
                      sm:px-6 
                      lg:py-24 lg:px-8 '
      >
        <ComponentSubtitle>
          We have comprehensive experiences in a variety of industries and
          projects.
        </ComponentSubtitle>
        <ReferenceList references={references} />
        <div className=' text-sm text-gray-500 mt-36 max-w-4xl'>
          <span>
            ** Disclaimer: References might be subject to invidual work
            experiences of our employees and partners. They may have been done
            by the employees within their previous work experiences or in
            coperation with other consultancies. We only refers to the
            individual roles within those projects. **
          </span>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default ReferencesComponent;
