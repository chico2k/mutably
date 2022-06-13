import Head from 'next/head';
import React from 'react';
import ContactComponent from '../components/contact';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>mutably | Contact</title>
        <meta name='description' content='mutably contact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContactComponent header={false} />
    </div>
  );
};

export default ContactPage;
