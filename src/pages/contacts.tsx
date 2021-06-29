import { Box, Divider, Heading, Text } from '@chakra-ui/react'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import contactmd from '../data/contact'
import dynamic from 'next/dynamic'
import gfm from 'remark-gfm'
import raw from 'rehype-raw'
import renderers from '../utils/mdRenderers'

function Contacts() {
  const loadText = () => <p>A map is loading</p>
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import('../components/Map'), // replace '@components/map' with your component's location
        {
          loading: loadText,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  )
  return (
    <>
      <Box>
        <Heading> Feel free to contact me! </Heading>
        <Text mt="1rem" maxWidth="500px">
          Here is my contact information:
        </Text>
        <Divider mt="1rem" mb="1rem" />
        <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[raw]} components={renderers}>
          {contactmd}
        </ReactMarkdown>
        <Divider mt="1rem" mb="1rem" />
        {process.env.NEXT_PUBLIC_MAP_TOKEN ? (
          <Map mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN} />
        ) : (
          'Fail on loading Map'
        )}
      </Box>
    </>
  )
}

export default Contacts
