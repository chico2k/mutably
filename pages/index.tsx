import type { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '../components/main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>mutably GmbH | About and Contact</title>
        <meta
          name='description'
          content='Company and contact information for mutably GmbH.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
