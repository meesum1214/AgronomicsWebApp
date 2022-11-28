import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Suspense, useEffect, useState } from 'react'
import { ModalsProvider } from '@mantine/modals';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { RouterTransition } from '../components/RouterTransition';
import { NotificationsProvider } from '@mantine/notifications';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
const AuthPage = dynamic(import('../templates/AuthPage'), { ssr: false, suspense: false });
import { login } from '../states/userState';
import Loading from '../components/Loading';
import dynamic from 'next/dynamic';
import { myTheme } from '../utils/AppConfig';
import { store } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {

  const [token, setToken] = useState('')

  useEffect(() => {

    setToken(localStorage.getItem('ag-token-7878p') as any)
    login(JSON.parse(localStorage.getItem('ag-user-app-web') as any))

  }, [])



  return (
    <Suspense fallback={<Loading />} >
      <Loading />
      {
        token ?
          <div>
            <Head>
              <title>agronomics | web-app</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <div className='bg-neutral-200'>
              <Provider store={store}>
                <MantineProvider
                  withGlobalStyles
                  withNormalizeCSS
                  theme={myTheme}
                >
                  <ModalsProvider>

                    <NavBar />
                    <RouterTransition />
                    <NotificationsProvider position='bottom-center'>
                      {/* <BackgroundImage src="/BG.jpg" className=""> */}
                      {/* <BackgroundImage src="/bg-login2.jpg" className=""> */}
                      <Component {...pageProps} />
                      {/* </BackgroundImage> */}
                      <Footer />
                    </NotificationsProvider>
                  </ModalsProvider>
                </MantineProvider>
              </Provider>

            </div>

          </div>
          :
          <AuthPage />
      }
    </Suspense>
  )
}

export default MyApp
