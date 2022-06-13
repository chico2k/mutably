import React from 'react';

const ComponentWrapper: React.FC = ({ children }) => {
  return <section className='pt-24 min-h-screen'>{children}</section>;
};

export default ComponentWrapper;
