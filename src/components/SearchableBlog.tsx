import {
  Box,
  CloseButton,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useMemo, useState } from 'react'

import Cards from './Cards'
import Pagination from '@choc-ui/paginator'
import { PostContent } from '../utils/getBlogContent'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import SearchIcon from '@material-ui/icons/Search'

const byDateMostRecentFirst = (a: PostContent, b: PostContent) =>
  (a.createdTime || '9999') < (b.createdTime || '9999') ? 1 : -1

const SearchableBlog = ({ blogContent }: { blogContent: PostContent[] }) => {
  const [search, setSearch] = useState('')
  const [current, setCurrent] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)
  const postPerPage = 5

  const filteredPosts = useMemo(() => {
    let p = blogContent.filter((post) => !!post.createdTime)
    if (search.length > 0) {
      p = p.filter(
        (post) =>
          post.title?.toLowerCase().includes(search.toLowerCase()) ||
          post.category?.toLowerCase().includes(search.toLowerCase()) ||
          post.tags?.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (p.length > 0) {
      setPageNumber(Math.ceil(p.length / postPerPage))
    }
    return p.sort(byDateMostRecentFirst)
  }, [blogContent, search])

  return (
    <>
      {/* head */}
      <Flex alignItems="baseline">
        <Heading as="h2" color={useColorModeValue('blue.700', 'blue.300')}>
          Articles
        </Heading>
        <Stack
          as="nav"
          aria-label="RSS/Atom feeds"
          isInline
          alignItems="center"
          fontSize="xs"
          ml="auto"
          color="gray.600"
        >
          <Box as={RssFeedIcon} w={4} h={4} role="img" aria-hidden />
          <Link href="/rss/feed.xml" color={useColorModeValue('blue.700', 'blue.300')}>
            RSS
          </Link>
          <Link href="/rss/atom.xml" color={useColorModeValue('blue.700', 'blue.300')}>
            Atom
          </Link>
          <Link href="/rss/feed.json" color={useColorModeValue('blue.700', 'blue.300')}>
            JSON
          </Link>
        </Stack>
      </Flex>
      {/* search box */}
      <FormControl>
        <InputGroup mb={6}>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2em"
            px={0}
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon aria-hidden />}
            mt={5}
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            _placeholder={{ color: useColorModeValue('blue.700', 'blue.300') }}
            color={useColorModeValue('blue.700', 'blue.300')}
            focusBorderColor={useColorModeValue('blue.700', 'blue.300')}
            placeholder="Search Articles"
            width="100vw"
            mt={5}
          />
          <Divider />
          {search.length > 1 && (
            <InputRightElement mt={5}>
              {<CloseButton rounded="full" size="sm" onClick={() => setSearch('')} />}
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
      {/* posts */}
      <Stack as="section" role="feed">
        {filteredPosts
          .slice(current * postPerPage - postPerPage, current * postPerPage)
          .map((post) => (
            <Box key={post.pageId}>
              <Cards post={post} />
              <Divider />
            </Box>
          ))}
      </Stack>
      {/* pagination */}
      <Flex w="full" p={5} alignItems="center" justifyContent="center">
        <Pagination
          current={current}
          defaultCurrent={1}
          total={pageNumber * 10}
          onChange={(currentPage: number | undefined) => {
            if (currentPage) {
              setCurrent(currentPage)
            }
          }}
          paginationProps={{ display: 'flex' }}
          colorScheme="blue"
          rounded="full"
        />
      </Flex>
    </>
  )
}

export default SearchableBlog
