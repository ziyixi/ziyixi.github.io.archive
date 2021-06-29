import { ExtendedRecordMap } from 'notion-types'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

interface PostContent {
  tags: string | null
  category: string | null
  title: string | null
  createdTime: number | null
  editedTime: number | null
  pageId: string
  abstract: string | null
}

const getBlogContent = async (mainPageId: string, recordMap: ExtendedRecordMap) => {
  // * get the pageId for each row in the table
  const collectionQueryResult =
    recordMap.collection_query[Object.keys(recordMap.collection_query)[0]]
  const collectionQueryLevel2 = collectionQueryResult[Object.keys(collectionQueryResult)[0]]
  const allBlockIds = collectionQueryLevel2?.blockIds

  const blogContent: PostContent[] = []
  if (allBlockIds) {
    // * for each blockIds, get its info and append to the list
    await Promise.all(
      allBlockIds.map(async (value: string) => {
        const eachBlock = await notion.getPage(value)
        const infoId = Object.keys(eachBlock.block)[0]
        const properties = eachBlock.block[infoId].value.properties
        const createdTime = eachBlock.block[infoId].value.created_time
        const editedTime = eachBlock.block[infoId].value.last_edited_time

        blogContent.push({
          tags: properties['BpIl'] ? properties['BpIl'][0][0] : null,
          category: properties['|o[w'] ? properties['|o[w'][0][0] : null,
          title: properties['title'] ? properties['title'][0][0] : null,
          abstract: properties['=EkA'] ? properties['=EkA'][0][0] : null,
          createdTime: createdTime,
          editedTime: editedTime,
          pageId: value,
        })
      })
    )
  }
  return blogContent
}

export default getBlogContent
export type { PostContent }
