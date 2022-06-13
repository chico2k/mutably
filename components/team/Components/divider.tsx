import React from 'react';

type IProps = {
  title: string;
};

const DetailDividerComponent: React.FC<IProps> = ({ children, title }) => {
  return (
    <section>
      <div className='relative my-16'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300/40' />
        </div>
        <div className='relative flex justify-center'>
          <h3 className='px-3 bg-gray-900 text-xl font-medium text-gray-100 uppercase'>
            {[title]}
          </h3>
        </div>
      </div>
      {children}
    </section>
  );
};

export default DetailDividerComponent;
