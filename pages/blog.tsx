import React from 'react'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import notionInfo from '../data/notion'
import { GetStaticProps } from 'next'

const notion = new NotionAPI()

export const getStaticProps: GetStaticProps = async () => {
    const recordMap = await notion.getPage(notionInfo.pageId)

    return {
        props: {
            recordMap,
        },
        revalidate: 10,
    }
}

export default function Blog({ recordMap }: { recordMap: ExtendedRecordMap }) {
    if (!recordMap) {
        return null
    }
    return (
        <>
            <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} />
        </>
    )
}
