import type { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '../components/main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mutably - digital | change | tech</title>
        <meta name='description' content='mutably - digital | change | tech ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />

      <footer></footer>
    </>
  );
};

export default Home;
