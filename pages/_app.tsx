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
        <meta
          name='description'
          content='Saurabh is Software Engineer who specializes in building robust and scalable full stack web
        applications using React, Node.js, and MongoDB.'
        />
        <meta name='robots' content='index,follow' />
        <meta
          name='keywords'
          content='software developer, web development, full stack development, frontend development, backend development, React, Node.js'
        />
        <meta name='author' content='Saurabh Singh' />
        <meta property='og:title' content='Saurabh Singh | Software Engineer' />
        <meta
          property='og:description'
          content='Saurabh is Software Engineer who specializes in building robust and scalable full stack web
          applications using React, Node.js, and MongoDB.'
        />
        <meta
          property='og:image'
          content='https://saurabhsingh.live/images/logo.jpeg'
        />
        <link rel='canonical' href='https://saurabhsingh.live' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
