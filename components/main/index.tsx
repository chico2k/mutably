import React from 'react';
import ContactComponent from '../contact';

export const Main = () => {
  return (
    <main className='min-h-screen bg-gray-900'>
      <section id='about' className='max-w-2xl mx-auto px-6 pt-16 pb-32 text-center'>
        <h1 className='text-2xl font-semibold text-white sm:text-3xl'>
          mutably GmbH
        </h1>
        <p className='mt-5 whitespace-pre-line text-sm leading-6 text-gray-300'>
          {`Anton-Bruckner-Weg 3
83301 Traunreut
Germany

represented by Mario Galla

Handelsregister: HRB 30689
USt-IdNr.: DE350674764
Registergericht: Amtsgericht Traunstein`}
        </p>
      </section>

      <div id='contact' className='pb-20'>
        <ContactComponent header />
      </div>
    </main>
  );
};
