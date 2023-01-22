import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>BoilerPlate</title>

        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
