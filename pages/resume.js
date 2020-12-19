import { Heading, Icon, Stack, Link } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import GetAppIcon from '@material-ui/icons/GetApp';

const PdfViewer = dynamic(() => import('../components/Resume'), { ssr: false });
export function getStaticProps() {
  return {
    props: {},
  };
}

function Resume() {
  return (
    <>
      <Heading mb="2rem">
        <Stack spacing={4} direction="row" align="center">
          <span role="image">👀 my resume</span>
          <Link href={'cv/cv.pdf'}>
            <Icon as={GetAppIcon} />
          </Link>
        </Stack>
      </Heading>
      <PdfViewer url={'cv/cv.pdf'} scale={1.5} />
    </>
  );
}

export default Resume;
