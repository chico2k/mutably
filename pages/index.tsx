import type { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '../components/main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>mutably</title>
        <meta name='description' content='mutably' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
