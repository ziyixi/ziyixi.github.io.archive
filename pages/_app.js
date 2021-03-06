import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Center } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// core styles shared by all of react-notion-x (required)
// import 'react-notion-x/src/styles.css';
import '../css/custome-styles.css';

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';

// used for collection views (optional)
import 'rc-dropdown/assets/index.css';

// used for rendering equations (optional)
import 'katex/dist/katex.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Ziyi Xi - Ph.D. student in computational seismology </title>
        <meta
          property="og:title"
          content="Ziyi Xi - Ph.D. student in computational seismology"
          key="og:title"
        />
        <meta http-Equiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="keywords"
          content="coding, programming, seismology, high-performance computing"
        />
      </Head>
      <ChakraProvider>
        <Box bg="gray.50" minHeight="100vh">
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
      </ChakraProvider>
    </>
  );
}

export default MyApp;
