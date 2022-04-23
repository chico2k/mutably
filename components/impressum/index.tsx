import React from 'react';

const ImpressumComponent = () => {
  return (
    <div
      className='
    bg-gray-900 pt-10 max-w-7xl mx-auto py-12 px-4

    sm:pt-16 sm:px-6 

    lg:overflow-hidden lg:py-32 lg:px-8'
    >
      <p
        className='text-sm text-gray-400
      md:text-base
      '
      >
        <span
          className='font-bold text-lg text-gray-200
        md:text-xl'
        >
          mutably GmbH
        </span>
        <br />
        Anton-Bruckner-Weg 3 <br />
        83301 Traunreut <br />
        Germany
        <br />
        <br />
        <b />
        represented by Mario Galla
        <br />
        <br />
        Handelsregister: HRB 30689 <br />
        Registergericht: Amtsgericht Traunstein
        <br />
        <br />
        Mail: galla@mutably.io <br />
        Phone: +49 170 9675488
        <br />
      </p>
    </div>
  );
};

export default ImpressumComponent;
