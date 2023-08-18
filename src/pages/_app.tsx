import type { AppProps } from 'next/app'

import { UIProvider } from '@/context'

import '@/styles/globals.css'
import 'react-vertical-timeline-component/style.min.css';
import { NextUIProvider } from '@nextui-org/react'
import { ContentProvider } from '@/context/Content'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ContentProvider data={pageProps.data}>
      <NextUIProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </NextUIProvider>
    </ContentProvider>
  )
}