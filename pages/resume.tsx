import { Heading, Icon, Link, Wrap, WrapItem } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import GetAppIcon from '@material-ui/icons/GetApp'
import Emoji from '../utils/emoji'

const PdfViewer = dynamic(() => import('../components/Resume'), { ssr: false })
export function getStaticProps() {
    return {
        props: {},
    }
}

function Resume() {
    return (
        <>
            <Heading mb="2rem">
                <Wrap spacing={4}>
                    <WrapItem>
                        <Emoji symbol="👀 my resume" />
                    </WrapItem>
                    <WrapItem>
                        <Link href={'cv/cv.pdf'}>
                            <Icon as={GetAppIcon} />
                        </Link>
                    </WrapItem>
                </Wrap>
            </Heading>
            <PdfViewer url={'cv/cv.pdf'} />
        </>
    )
}

export default Resume
