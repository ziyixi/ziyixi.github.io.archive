import { useState } from 'react'
import { Box, Container, Button } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import gfm from 'remark-gfm'
import shortmd from '../data/bio/short'
import longmd from '../data/bio/long'
import renderers from '../utils/mdRenderers'

function Bio() {
    const [bioLength, setBioLength] = useState('short')

    const toggleBioLength = () => setBioLength(bioLength === 'short' ? 'long' : 'short')

    const containerProps = {
        style: {
            margin: 0,
            padding: 0,
            paddingBottom: '1rem',
        },
    }

    return (
        <Box>
            <Container {...containerProps}>
                <ReactMarkdownWithHtml plugins={[gfm]} allowDangerousHtml renderers={renderers}>
                    {shortmd}
                </ReactMarkdownWithHtml>
            </Container>
            {bioLength === 'long' && (
                <>
                    <Container {...containerProps}>
                        <ReactMarkdown
                            source={longmd}
                            renderers={renderers}
                            escapeHtml={false}
                            plugins={[[gfm, { singleTilde: false }]]}
                        />
                    </Container>
                </>
            )}
            <Button onClick={toggleBioLength} bg="blue.200">
                {' '}
                {bioLength === 'short' ? 'Long' : 'Short'} bio{' '}
            </Button>
        </Box>
    )
}

export default Bio
