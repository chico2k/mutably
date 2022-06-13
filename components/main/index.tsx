import React from 'react';
import HeroComponent from '../hero';
import MetricsComponent from '../metrics';
import ContactComponent from '../contact';
import ServicesComponent from '../services';

export const Main = () => {
  return (
    <main className=' bg-gray-900'>
      <HeroComponent />
      <ServicesComponent />
      <MetricsComponent />
      <div className='my-32'>
        <ContactComponent header />
      </div>
    </main>
  );
};
