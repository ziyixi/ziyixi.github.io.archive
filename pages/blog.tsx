import React from 'react'
import { NotionAPI } from 'notion-client'
import { NotionRenderer, Collection, CollectionRow } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import notionInfo from '../data/notion'
import { GetStaticProps } from 'next'
import { BlogIndex,Info } from '../components/BlogIndex'

const notion = new NotionAPI()

async function getBlogContent(mainPageId: string, recordMap: ExtendedRecordMap) {
    // * get the pageId for each row in the table
    const collectionQueryResult =
        recordMap.collection_query[Object.keys(recordMap.collection_query)[0]]
    const collectionQueryLevel2 = collectionQueryResult[Object.keys(collectionQueryResult)[0]]
    const allBlockIds = collectionQueryLevel2?.blockIds
    // block["7b868910-8732-4b19-a22b-85ccd35cecdd"].value.properties["=EkA"]
    let infoAll: Info[]  = []
    if (allBlockIds) {
        // * for each blockIds, get its info and append to the list
        await Promise.all(allBlockIds.map(async (value: string) => {
            const eachBlock = await notion.getPage(value)
            const infoId = Object.keys(eachBlock.block)[0]
            const properties = eachBlock.block[infoId].value.properties
            const createdTime = eachBlock.block[infoId].value.created_time
            const editedTime = eachBlock.block[infoId].value.last_edited_time
            infoAll.push({
                tags: properties["BpIl"]? properties["BpIl"][0][0] : null,
                category: properties["|o[w"]? properties["|o[w"][0][0] : null,
                title: properties["title"]? properties["title"][0][0] : null,
                abstract: properties["=EkA"]? properties["=EkA"][0][0] : null,
                createdTime: createdTime,
                editedTime: editedTime,
                pageId: value
            })
        }))
    } 
    return infoAll
}

export const getStaticProps: GetStaticProps = async () => {
    const recordMap = await notion.getPage(notionInfo.pageId)
    const infoAll=await getBlogContent(notionInfo.pageId, recordMap)

    return {
        props: {
            recordMap,
            infoAll
        },
        revalidate: 10,
    }
}

export default function Blog({ recordMap, infoAll }: { recordMap: ExtendedRecordMap, infoAll: Info[] }) {
    if (!recordMap) {
        return null
    }
    
    return (
        <>
            <BlogIndex
                posts={infoAll}
            />
        </>
    )
}
