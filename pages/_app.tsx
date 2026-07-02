import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import Spinner from '../components/Layout/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      if (isLoading) return;
      return setLoading(true);
    });
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => {
      return setLoading(false);
    });
  });

  return (
    <>
      <div className='bg-gray-900'>
        <>
          {isLoading && <Spinner />}
          <Component {...pageProps} />

          <ToastContainer />
        </>
      </div>
    </>
  );
}

export default MyApp;
