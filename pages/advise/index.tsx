import Head from 'next/head';
import React from 'react';
import AdviseComponent from '../../components/advise';

const ConsultingPage = () => {
  return (
    <>
      <Head>
        <title>mutably | Advise</title>
        <meta name='description' content='mutably Advise' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AdviseComponent />
    </>
  );
};

export default ConsultingPage;
