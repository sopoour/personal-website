import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Layout from '@app/components/layout/Layout';
import { GlobalStyle } from '@app/styles/global';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { darkTheme, lightTheme } from '@app/styles/theme';
import useThemeSwitch from '@app/hooks/useThemeSwitch';

const App = ({ Component, pageProps }: AppProps) => {
  const { theme, setSpecificTheme } = useThemeSwitch((state) => state);
  const metaDescription =
    'Fio Auer is a Frontend Developer who builds accessible, creative and inclusive products for the web.';
  const metaTitle = 'Fio Auer';
  const metaImage = 'https://sophia-auer.vercel.app/og.png';

  /* useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (mediaQuery) {
      setSpecificTheme('dark');
    } else {
      setSpecificTheme('light');
    }
  }, []); */

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta key="image" itemProp="image" content={metaImage} />
        <meta name="viewport" content="initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta key="name" itemProp="name" content={metaTitle} />
        <meta key="description" name="description" content={metaDescription} />
        <meta key="og:title" property="og:title" content={metaTitle} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:description" property="og:description" content={metaDescription} />
        <meta key="og:site_name" property="og:site_name" content="Fio - Frontend Developer" />
        <meta key="og:image" property="og:image" content={metaImage} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
