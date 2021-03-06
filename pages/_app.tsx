import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableColorScheme>
      <Layout title={pageProps.title}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
