import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import { Provider /* useDispatch  */ } from 'react-redux'
import { store } from '../redux/store'
// import fs from 'fs/promises'
// import path from 'path'
// import { setNavbarMenu } from '../redux/slices/navbarMenuSlice'
// import { useEffect } from 'react'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </MantineProvider>
    </>
  )
}
