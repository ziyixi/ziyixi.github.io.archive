import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react'
import { Code, Collection, CollectionRow, Equation, NotionRenderer } from 'react-notion-x'
import { getAllPagesInSpace, getPageTitle } from 'notion-utils'

import { ExtendedRecordMap } from 'notion-types'
import { NotionAPI } from 'notion-client'
import notionInfo from '../../data/notion'

const notion = new NotionAPI()

export const getStaticProps = async (context: { params: { pageId: string } }) => {
  const pageId = context.params.pageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}

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
      traverseCollections: false,
    }
  )
  const paths = Object.keys(pages)
    .map((pageId) => `/notion-page/${pageId}`)
    .concat(notionInfo.projectIds)

  return {
    paths,
    fallback: false,
  }
}

export default function NotionPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
  const useDark = useColorModeValue(false, true)
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
  return (
    <>
      <Heading style={{ textAlign: 'center' }}>{title}</Heading>
      <Divider />
      <Box mt={8}>
        <NotionRenderer
          recordMap={recordMap}
          fullPage={false}
          darkMode={useDark}
          components={{
            equation: Equation,
            code: Code,
            collection: Collection,
            collectionRow: CollectionRow,
          }}
        />{' '}
      </Box>
    </>
  )
}
