import { Badge, Box, Flex, Link, Text, Wrap, WrapItem, useColorModeValue } from '@chakra-ui/react'

import { PostContent } from '../utils/getBlogContent'
import { formatDate } from '../utils/format'

const Cards = ({ post }: { post: PostContent }) => {
  return (
    <Flex p={3} w="full" alignItems="center" justifyContent="center">
      <Box mx="auto" px={8} py={4} rounded="lg" shadow="lg" w="full">
        <Flex justifyContent="space-between" alignItems="center">
          <Box as="span" fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {post.createdTime ? formatDate(post.createdTime) : ''}
          </Box>
          <Box
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
          >
            {post.category ? post.category : ''}
          </Box>
        </Flex>

        <Box d="flux" alignItems="baseline" mt={2}>
          <Link
            href={`/notion-page/${post.pageId}`}
            fontSize="2xl"
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
          >
            {post.title ? post.title : ''}
          </Link>
          <Wrap spacing="2" alignItems="center" mt={1.5}>
            {post.tags
              ? post.tags.split(',').map((tag) => (
                  <WrapItem key={tag}>
                    <Badge borderRadius="full" px="2" colorScheme="blue">
                      {tag}
                    </Badge>
                  </WrapItem>
                ))
              : ''}
          </Wrap>
          <Text mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
            {post.abstract ? post.abstract : ''}
          </Text>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            href={`/notion-page/${post.pageId}`}
            color={useColorModeValue('brand.600', 'brand.400')}
            _hover={{ textDecor: 'underline' }}
          >
            Read more
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Cards
