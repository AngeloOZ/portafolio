import type { AppProps } from 'next/app'

import { UIProvider } from '@/context'

import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </NextUIProvider>
  )
}