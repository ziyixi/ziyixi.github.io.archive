import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react'

import { ChatIcon } from '@chakra-ui/icons'
import type { RecordingItems } from '../data/talks'

const VideoStack = ({ topics, recordings }: { topics: string[]; recordings: RecordingItems[] }) => {
  const videoBgColor = useColorModeValue('gray.200', 'gray.500')

  return (
    <Box>
      <Box mb="2rem">
        <Heading mb="1rem">Video recording of my formal presentations.</Heading>

        <Box mb="1rem">
          {topics.map((topic) => (
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
        {recordings.map((talk) => (
          <GridItem key={talk.name}>
            <Box p="1rem" bg={videoBgColor} borderRadius={5}>
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

export default VideoStack
