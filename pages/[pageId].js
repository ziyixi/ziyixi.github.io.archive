import React, { useEffect } from 'react';
import { getPageTitle, getAllPagesInSpace } from 'notion-utils';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import notionInfo from '../data/notion';
import { useRouter } from 'next/router';
import { Heading, Divider, Box } from '@chakra-ui/react';

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    notionInfo.pageId,
    notionInfo.spaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false
    }
  );
  const paths = Object.keys(pages)
    .map((pageId) => `/${pageId}`)
    .map((pageId) => pageId.replace(/\-/g, ''))
    .concat(notionInfo.projectIds);

  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ recordMap }) {
  const whiteList = ['blog', 'contacts', 'index', 'resume', 'talks'];
  const useWhiteListParams = () => {
    const router = useRouter();
    const { pagelink } = router.query;
    useEffect(() => {
      if (!whiteList.includes(pagelink)) {
        router.push('/404');
      }
    }, [pagelink]);
  };

  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  return (
    <>
      <Heading style={{ 'text-align': 'center' }}>{title}</Heading>
      <Divider />
      <Box mt={8}>
        <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} />
      </Box>
    </>
  );
}
