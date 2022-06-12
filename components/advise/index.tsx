import React from 'react';
import ReferencesButton from '../Layout/Button/ReferencesButton';
import ComponentWrapper from '../Layout/ComponentWrapper';
import ServicesDetailComponent from './services';

const AdviseComponent = () => {
  return (
    <ComponentWrapper>
      <ServicesDetailComponent />
      <div className='max-w-7xl  mx-auto text-indigo-400 text-left px-4 pb-12 
      sm:px-6 
      lg:px-8 lg:text-center'>
        <ReferencesButton />
      </div>
    </ComponentWrapper>
  );
};

export default AdviseComponent;
