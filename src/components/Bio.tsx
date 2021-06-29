import { Box, Button, Container, useColorModeValue } from '@chakra-ui/react'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import raw from 'rehype-raw'
import renderers from '../utils/mdRenderers'
import { useState } from 'react'

const Bio = ({ shortmd, longmd }: { shortmd: string; longmd: string }) => {
  const [bioLength, setBioLength] = useState('short')

  const toggleBioLength = () => setBioLength(bioLength === 'short' ? 'long' : 'short')

  const containerProps = {
    style: {
      margin: 0,
      padding: 0,
      paddingBottom: '1rem',
    },
  }

  return (
    <Box>
      <Container {...containerProps}>
        <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[raw]} components={renderers}>
          {shortmd}
        </ReactMarkdown>
      </Container>
      {bioLength === 'long' && (
        <>
          <Container {...containerProps}>
            <ReactMarkdown
              remarkPlugins={[[gfm, { singleTilde: false }]]}
              rehypePlugins={[raw]}
              components={renderers}
            >
              {longmd}
            </ReactMarkdown>
          </Container>
        </>
      )}
      <Button onClick={toggleBioLength} bg={useColorModeValue('blue.200', 'blue.700')}>
        {' '}
        {bioLength === 'short' ? 'Long' : 'Short'} bio{' '}
      </Button>
    </Box>
  )
}

export default Bio
