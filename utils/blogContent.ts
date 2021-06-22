import { ExtendedRecordMap } from 'notion-types'
import { NotionAPI } from 'notion-client'

export function getBlogContent(mainPageId: string, recordMap: ExtendedRecordMap) {
    // * get the pageId for each row in the table
    const collectionQueryResult =
        recordMap.collection_query[Object.keys(recordMap.collection_query)[0]]
    const collectionQueryLevel2 = collectionQueryResult[Object.keys(collectionQueryResult)[0]]
    const allBlockIds = collectionQueryLevel2?.blockIds

    const notion = new NotionAPI()
    let recordMapAll
    if (allBlockIds) {
        // * for each blockIds, get its info and append to the list
        const actions = allBlockIds.map((value: string) => {
            notion.getPage(value)
        })
        recordMapAll = Promise.all(actions)
    }
}
