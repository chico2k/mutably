import React from 'react';

const ImpressumComponent = () => {
  return (
    <div className='bg-gray-600 h-screen w-full flex items-center justify-center relative'>
      <p className='text-sm text-gray-400'>
        <span className='font-bold text-xl text-gray-200'>mutably GmbH</span>
        <br />
        Anton-Bruckner-Weg 3 <br />
        83301 Traunreut <br />
        Deutschland
        <br />
        <br />
        <b />
        vertreten durch Mario Galla
        <br />
        <br />
        Handelsregister: HRB 30689 <br />
        Registergericht: Amtsgericht Traunstein
        <br />
        <br />
        Email: galla@mutably.io <br />
        Telefon: +49 170 9675488
        <br />
      </p>
    </div>
  );
};

export default ImpressumComponent;
