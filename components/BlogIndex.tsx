// modified from https://github.com/franky47/francoisbest.com/blob/46a46380ce7fc51eb29ae316957f2a02324afead/src/components/blog/BlogIndex.tsx
import {
    Box,
    BoxProps,
    ChakraProps,
    CloseButton,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HeadingProps,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    StackProps,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useQueryState } from 'next-usequerystate'
import React from 'react'
import { FiSearch, FiTag } from 'react-icons/fi'
import { PostPreview } from './PostPreview'

// --
const H2: React.FC<HeadingProps> = (p) => <Heading as="h2" size="xl" {...p} />
const Paragraph = (p: BoxProps) => <Text as="p" mb={8} {...p} />

export interface Info {
    tags: string | null
    category: string | null
    title: string | null
    createdTime: number | null
    editedTime: number | null
    pageId: string
    abstract: string | null
}
type Posts = Info[]

export interface BlogIndexProps {
    posts: Posts
}

// --

const byDateMostRecentFirst = (a: Info, b: Info) =>
    (a.createdTime || '9999') < (b.createdTime || '9999') ? 1 : -1

// --

export const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
    const [tag, setTag] = useQueryState('tag')
    const [search, setSearch] = React.useState('')
    const filteredPosts = React.useMemo(() => {
        let p = posts.filter((post) => !!post.createdTime)
        if (tag) {
            p = p.filter((post) => post.tags?.includes(tag))
        }
        if (search.length > 0) {
            p = p.filter(
                (post) =>
                    post.title?.toLowerCase().includes(search.toLowerCase()) ||
                    post.category?.toLowerCase().includes(search.toLowerCase()) ||
                    post.tags?.toLowerCase().includes(search.toLowerCase())
            )
        }
        return p.sort(byDateMostRecentFirst)
    }, [posts, tag, search])

    return (
        <>
            <Flex alignItems="baseline">
                <H2 color="green.800">Share Ideas, Document Solutions</H2>
                <Stack
                    as="nav"
                    aria-label="RSS/Atom feeds"
                    isInline
                    alignItems="center"
                    fontSize="xs"
                    ml="auto"
                    color="gray.600"
                ></Stack>
            </Flex>
            <FormControl>
                <FormLabel color="blue.700">Search articles</FormLabel>
                <InputGroup mb={6}>
                    <InputLeftElement
                        pointerEvents="none"
                        fontSize="1.2em"
                        px={0}
                        // eslint-disable-next-line react/no-children-prop
                        children={<FiSearch aria-hidden />}
                        color={
                            search.length > 0
                                ? useColorModeValue('gray.600', 'gray.400')
                                : useColorModeValue('gray.400', 'gray.600')
                        }
                    />
                    <Input
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        _placeholder={{ color: 'blue.700' }}
                        color="blue.700"
                        focusBorderColor="blue.700"
                        placeholder="Search Articles"
                        width="300%"
                    />
                    <Divider />
                    {search.length > 1 && (
                        <InputRightElement
                            // eslint-disable-next-line react/no-children-prop
                            children={
                                <CloseButton
                                    rounded="full"
                                    size="sm"
                                    onClick={() => setSearch('')}
                                />
                            }
                        />
                    )}
                </InputGroup>
            </FormControl>
            {tag && <TagInfoBox tag={tag} onClear={() => setTag(null)} />}
            <Stack as="section" role="feed">
                {filteredPosts.map((post) => (
                    <React.Fragment key={post.pageId}>
                        <PostPreview frontMatter={post} mb="auto" />
                        <Divider />
                    </React.Fragment>
                ))}
            </Stack>
            {filteredPosts.length === 0 && <NoResults />}
        </>
    )
}

// --

export interface TagInfoBoxProps extends StackProps {
    tag: string
    onClear: () => void
}

export const TagInfoBox: React.FC<TagInfoBoxProps> = ({ onClear, ...props }) => {
    return (
        <Stack
            isInline
            alignItems="center"
            bg={useColorModeValue('blue.50', 'gray.800')}
            p={2}
            pl={3}
            spacing={3}
            rounded="md"
            borderWidth="1px"
            borderColor={useColorModeValue('blue.200', 'blue.800')}
            color={useColorModeValue('blue.900', 'blue.300')}
            fontSize="sm"
            // css={useAccentStyles('blue')}
            {...props}
        >
            <Box
                as={FiTag}
                role="img"
                aria-label="Info"
                color={useColorModeValue('blue.600', 'blue.400')}
                w={4}
                h={4}
            />
            <Text>Showing posts tagged</Text>
            {/* <Tag name={tag} mt="1px" interactive={false} mr="auto" /> */}
            <CloseButton rounded="full" aria-label="Clear" size="sm" onClick={onClear} />
        </Stack>
    )
}

// --

export const NoResults: React.FC<ChakraProps> = ({ ...props }) => {
    return (
        <Paragraph
            textAlign="center"
            my={12}
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.500')}
            {...props}
        >
            No posts found.
        </Paragraph>
    )
}
