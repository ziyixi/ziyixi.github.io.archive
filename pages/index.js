import { Heading, Divider } from '@chakra-ui/react';
import Bio from '../components/Bio';
import Featured from '../components/Featured';

export function getStaticProps() {
  return {
    props: {},
  };
}

function Home() {
  return (
    <>
      <Heading size="xl" mb="1rem">
        <span role="img">👋</span> Hey there! I'm Ziyi.
      </Heading>
      <Bio />
      <Divider mt="2rem" mb="2rem" />
      <Featured />
      <Divider mt="2rem" mb="2rem" />
    </>
  );
}

export default Home;
