import Head from 'next/head';
import React from 'react';
import ReferencesComponent from '../../components/references';

const ReferencesPages = () => {
  return (
    <>
      <Head>
        <title>mutably | References</title>
        <meta name='description' content='mutably References' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ReferencesComponent />
    </>
  );
};

export default ReferencesPages;
