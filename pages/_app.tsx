import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/navigation';
import FooterComponent from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='bg-gray-900'>
        <Navigation />
        <Component {...pageProps} />;
        <FooterComponent />
      </div>
    </>
  );
}

export default MyApp;
