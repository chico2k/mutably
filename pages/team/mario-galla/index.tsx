import Head from 'next/head';
import React from 'react';
import MarioGallaComponent from '../../../components/team/marioGalla';

const MarioGallaPage = () => {
  return (
    <>
      <Head>
        <title>mutably | Mario Galla</title>
        <meta name='description' content='mutably Mario Galla' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MarioGallaComponent />
    </>
  );
};

export default MarioGallaPage;
