import Head from 'next/head';
import React from 'react';
import ContactComponent from '../components/contact';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>mutably | Contact</title>
        <meta name='description' content='mutably contact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContactComponent />
    </div>
  );
};

export default ContactPage;
