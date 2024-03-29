// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for collection views (optional)
import 'rc-dropdown/assets/index.css'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
// override notion page wrong front layer
import '../styles/overrideNotionPage.css'

import { Box, Center } from '@chakra-ui/react'

import type { AppProps } from 'next/app'
import { Chakra } from '../Chakra'
import Footer from '../layouts/Footer'
import Head from 'next/head'
import Header from '../layouts/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Ziyi Xi - Ph.D. candiate in computational science </title>
        <meta
          property="og:title"
          content="Ziyi Xi - Ph.D. student in computational seismology"
          key="og:title"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="keywords"
          content="coding, programming, seismology, high-performance computing"
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Chakra cookies={pageProps.cookies}>
        <Box minHeight="100vh">
          <Center>
            <Box width={900} maxWidth="85vw" minHeight="100vh" pt="4rem" pb="4rem">
              <Header />
              <Box pt="2rem">
                <Component {...pageProps} />
              </Box>
            </Box>
          </Center>
        </Box>
        <Footer />
      </Chakra>
    </>
  )
}
export default MyApp

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from '../Chakra'
