import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next';

import { UIProvider } from '@/context'

import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default appWithTranslation(App);
