import React from 'react';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import notionInfo from '../data/notion';

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const recordMap = await notion.getPage(notionInfo.pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Blog({ recordMap }) {
  if (!recordMap) {
    return null;
  }
  return (
    <>
      <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} />
    </>
  );
}
