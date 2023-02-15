import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Saurabh Singh | Software Engineer</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
