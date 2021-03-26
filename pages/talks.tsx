import {
    Grid,
    GridItem,
    Box,
    Heading,
    Tag,
    Divider,
    Button,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import talksData from '../data/talks'

export function getStaticProps() {
    return {
        props: {},
    }
}

function Talks() {
    return (
        <Box>
            <Box mb="2rem">
                <Heading mb="1rem">Video recording of my formal presentations.</Heading>

                <Box mb="1rem">
                    {talksData.topics.map((topic) => (
                        <Tag key={topic} mr="1rem" mb="1rem" colorScheme="purple">
                            {topic}
                        </Tag>
                    ))}
                </Box>

                <a href="mailto:xiziyi@msu.edu">
                    <Button leftIcon={<ChatIcon />} colorScheme="blue" size="md">
                        Reach out!
                    </Button>
                </a>
            </Box>

            <Divider mb="2rem" />

            <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={8}>
                {talksData.recordings.map((talk) => (
                    <GridItem key={talk.name}>
                        <Box p="1rem" bg="gray.200" borderRadius={5}>
                            <iframe
                                title={talk.name}
                                width="100%"
                                height="300"
                                src={talk.url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <Box mt="1rem">
                                <Heading size="s"> {talk.name}</Heading>
                                <Wrap spacing="3px">
                                    {talk.topic.map((eachTopic) => (
                                        <WrapItem key={eachTopic}>
                                            <Tag colorScheme="orange" mt="1rem">
                                                {eachTopic}
                                            </Tag>
                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </Box>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default Talks
