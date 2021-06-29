import { ExtendedRecordMap } from 'notion-types'
import { GetStaticProps } from 'next'
import { NotionAPI } from 'notion-client'
import type { PostContent } from '../utils/getBlogContent'
import SearchableBlog from '../components/SearchableBlog'
import generateRss from '../lib/rss'
import getBlogContent from '../utils/getBlogContent'
import notionInfo from '../data/notion'

const notion = new NotionAPI()

export const getStaticProps: GetStaticProps = async () => {
  const recordMap = await notion.getPage(notionInfo.pageId)
  const blogContent = await getBlogContent(notionInfo.pageId, recordMap)

  // generate Rss feed
  generateRss(blogContent)

  return {
    props: {
      recordMap,
      blogContent,
    },
    revalidate: 10,
  }
}

const Blog = ({
  recordMap,
  blogContent,
}: {
  recordMap: ExtendedRecordMap
  blogContent: PostContent[]
}) => {
  if (!recordMap) {
    return null
  }

  return (
    <>
      <SearchableBlog blogContent={blogContent} />
    </>
  )
}

export default Blog
