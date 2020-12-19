import { useState } from 'react';
import { Box, Container, Button, Link as ChackraLink, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import shortmd from '../data/bio/short.md';
import longmd from '../data/bio/long.md';
import edumd from '../data/bio/edu.md';

const LinkRenderer = ({ ...children }) => <ChackraLink color="teal.500" {...children} />;
const renderers = {
  Link: LinkRenderer,
};

function Bio() {
  const [bioLength, setBioLength] = useState('short');

  const toggleBioLength = () => setBioLength(bioLength === 'short' ? 'long' : 'short');

  const containerProps = {
    style: {
      margin: 0,
      padding: 0,
      paddingBottom: '1rem',
    },
  };

  return (
    <Box>
      <Container {...containerProps}>
        <ReactMarkdown plugins={[gfm]}>{shortmd}</ReactMarkdown>
      </Container>
      {bioLength === 'long' && (
        <>
          <Text fontSize="3xl" color="blue.500">
            Education:
          </Text>
          <Container {...containerProps}>
            <ReactMarkdown
              source={edumd}
              renderers={renderers}
              escapeHtml={false}
              plugins={[[gfm, { singleTilde: false }]]}
            />
          </Container>
          <Text fontSize="3xl" color="blue.500">
            Interests:
          </Text>
          <Container {...containerProps}>
            <ReactMarkdown
              source={longmd}
              renderers={renderers}
              escapeHtml={false}
              plugins={[[gfm, { singleTilde: false }]]}
            />
          </Container>
        </>
      )}
      <Button onClick={toggleBioLength}> {bioLength === 'short' ? 'Long' : 'Short'} bio </Button>
    </Box>
  );
}

export default Bio;
