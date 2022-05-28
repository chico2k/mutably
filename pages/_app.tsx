import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/navigation';
import FooterComponent from '../components/footer';
import { useEffect, useReducer, useState } from 'react';
import { Router } from 'next/router';
import Spinner from '../components/Layout/Spinner';

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

  // console.log('setLoading', isLoading);

  return (
    <>
      <div className='bg-gray-900'>
        <Navigation />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Component {...pageProps} />;
            <FooterComponent />
          </>
        )}
      </div>
    </>
  );
}

export default MyApp;
