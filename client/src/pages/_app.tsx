import { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

import { APP_TITLE } from '@/constants/app';
import { fetcher } from '@/lib/fetcher';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="viewport" content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width" />
      </Head>
        <SWRConfig
          value={{
            fetcher,
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            errorRetryCount: 2,
          }}
        >
              <Component {...pageProps} />
              <Toaster />
        </SWRConfig>
    </>
  );
};

export default MyApp;
