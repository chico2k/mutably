import Head from 'next/head';
import React from 'react';
import DevelopmentComponent from '../../components/development';

const DevelopmentPage = () => {
  return (
    <>
      <Head>
        <title>mutably | Development</title>
        <meta name='description' content='mutably Development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DevelopmentComponent />
    </>
  );
};

export default DevelopmentPage;
