import React from 'react';

const ComponentSubtitle: React.FC = ({ children }) => {
  return (
    <h2 className='text-2xl font-bold text-gray-200 max-w-6xl sm:text-4xl mb-12 xs:mb-16 md:mb-20'>
      {children}
    </h2>
  );
};

export default ComponentSubtitle;
