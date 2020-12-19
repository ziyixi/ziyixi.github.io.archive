import { Heading, Icon, Link, Wrap, WrapItem } from '@chakra-ui/react';
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
        <Wrap spacing={4}>
          <WrapItem>
            <span role="image">👀 my resume</span>
          </WrapItem>
          <WrapItem>
            <Link href={'cv/cv.pdf'}>
              <Icon as={GetAppIcon} />
            </Link>
          </WrapItem>
        </Wrap>
      </Heading>
      <PdfViewer url={'cv/cv.pdf'} scale={1.5} />
    </>
  );
}

export default Resume;
