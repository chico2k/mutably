import Head from 'next/head';
import React from 'react';
import TeamComponent from '../../components/team';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>mutably | Team</title>
        <meta name='description' content='mutably team' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TeamComponent />;
    </>
  );
};

export default TeamPage;
