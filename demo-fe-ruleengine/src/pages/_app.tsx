import axiosClient from '@/api/axios-client'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models/common'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { SWRConfig } from 'swr'
import '../styles/globals.css'
import '../styles/prism.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Setup goi Layout ra cho tat ca pages. Moi page nhu Home, about, post neu co dinh nghia Layout thi no se sai layout do
// Neu ko thi EmptyLayout se dc sai
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  return( 
    <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          
          <SWRConfig value={{fetcher: url => axiosClient.get(url), shouldRetryOnError: false}}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  ) 
}
export default MyApp 