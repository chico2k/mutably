import Head from 'next/head';
import React from 'react';
import TrainComponent from '../../components/train';

const TrainingsPage = () => {
  return (
    <>
      <Head>
        <title>mutably | Training</title>
        <meta name='description' content='mutably Training' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TrainComponent />
    </>
  );
};

export default TrainingsPage;
