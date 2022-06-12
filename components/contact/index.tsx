import React, { useState } from 'react';
import ContactForm from './ContactForm';

interface IProps {}
const ContactComponent: React.FC<IProps> = ({}) => {
  const [success, setSuccess] = useState(false);

  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    robot: false,
  });

  return (
    <section className='pt-16 lg:pb-8 bg-gray-900 items-end max-w-lg mx-auto px-4 sm:px-6 sm:max-w-xl lg:max-w-7xl lg:px-8 xl:max-w-7xl  '>
      <div className='lg:pb-8 mx-auto bg-gray-900 items-end max-w-lg lg:max-w-7xl'>
        <h2 className='md:pt-6 lg:pt-12 lg:text-center text-left mx-auto  text-4xl text-gray-100 sm:text-5xl lg:text-7xl '>
          Get in touch with us.
        </h2>

        {success ? (
          <div>
            <div className='mt-8 py-4 px-4 bg-gray-200 rounded-lg'>
              <div className='font-bold mb-4'>
                Thanks for contacting us. Here is a copy of your request
              </div>
              <div className='italic'>
                <div>Name: {message.name || 'n/a'}</div>
                <div>Email: {message.email || 'n/a'}</div>
                <div>Phone: {message.phone || 'n/a'}</div>
                <div>Company: {message.company || 'n/a'}</div>
                <div className='mt-2'>Message: {message.message}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className='bg-gray-900 py-10  lg:col-span-3 lg:py-12'>
        <div className='max-w-lg mx-auto lg:max-w-3xl'>
          <ContactForm
            setSuccess={setSuccess}
            success={success}
            setMessage={setMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
