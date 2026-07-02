import React, { useState } from 'react';
import ContactForm from './ContactForm';

interface IProps {
  header: boolean;
}
const ContactComponent: React.FC<IProps> = ({ header }) => {
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
    <section className='bg-gray-900 max-w-2xl mx-auto px-6'>
      <div className='bg-gray-900'>
        {header && (
          <h2 className='text-2xl font-semibold text-gray-100 sm:text-3xl'>
            Contact
          </h2>
        )}

        {success ? (
          <div>
            <div className='mx-auto mt-8 py-4 px-4 bg-gray-200 rounded-lg max-w-3xl'>
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

      <div className='bg-gray-900 py-8'>
        <div>
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
