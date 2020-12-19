import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Text, Heading, Divider } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import contactmd from '../data/contact/contact.md';

export function getStaticProps() {
  return {
    props: {},
  };
}

function Contacts() {
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import('../components/Map'), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        },
      ),
    [
      /* list variables which should trigger a re-render here */
    ],
  );

  return (
    <Box>
      <Heading>
        {' '}
        <span role="img">🚀</span> Feel free to contact me!{' '}
      </Heading>
      <Text mt="1rem" maxWidth="500px">
        Here is my contact information:
      </Text>
      <Divider mt="1rem" mb="1rem" />
      <ReactMarkdown plugins={[gfm]}>{contactmd}</ReactMarkdown>
      <Divider mt="1rem" mb="1rem" />
      <Map />
    </Box>
  );
}

export default Contacts;
