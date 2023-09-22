import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import client from '../store';
import { LocaleContext } from '../src/contexts/locale';
import { ENUM_LOCALE } from '../src/constants/enums';
import { useState } from 'react';
import lang from '../src/lang';

function CustomApp({ Component, pageProps, router }: AppProps) {
  const { locales, defaultLocale = 'en' } = router;
  const allLocales = locales as ENUM_LOCALE[];
  const [locale, setLocale] = useState(
    router.locale
      ? (router.locale as ENUM_LOCALE)
      : (defaultLocale as ENUM_LOCALE)
  );

  const content = lang[locale];

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        {/* <title>{content.title}</title> */}
      </Head>

      <LocaleContext.Provider
        value={{
          locales: allLocales,
          locale,
          setLocale,
          content,
        }}
      >
        <ApolloProvider client={client}>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </ApolloProvider>
      </LocaleContext.Provider>
    </>
  );
}

export default CustomApp;
