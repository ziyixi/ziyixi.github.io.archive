import {
    Box,
    BoxProps,
    Flex,
    Link as ChackraLink,
    Heading,
    HeadingProps,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { formatDate } from '../utils/format'
import { Tags } from './Tags'

const H3: React.FC<HeadingProps> = (p) => <Heading color="black.700" as="h3" size="md" {...p} />

interface Info {
    tags: string | null
    category: string | null
    title: string | null
    createdTime: number | null
    editedTime: number | null
    pageId: string
    abstract: string | null
}

export interface PostPreviewProps extends Omit<StackProps, 'title'> {
    hash?: string
    linkable?: boolean
    frontMatter: Info
}

export const PostPreview: React.FC<PostPreviewProps> = ({
    linkable = true,
    frontMatter: { title, createdTime, abstract, pageId, tags },
    children,
    ...props
}) => {
    return (
        <Stack as="article" spacing={4} mb={0} {...props}>
            <Box as="header">
                <H3 mb={1}>
                    {linkable ? (
                        <ChackraLink href={pageId.replace(/-/g, '')}>{title}</ChackraLink>
                    ) : (
                        <>{title}</>
                    )}
                </H3>
                <Flex alignItems="flex-start" flexWrap="wrap" flexDirection={['column', 'row']}>
                    <Text fontSize="sm" color={createdTime ? 'blue.800' : 'orange.500'}>
                        {createdTime ? formatDate(createdTime, 'DRAFT') : ''}
                    </Text>
                    <Tags
                        tags={tags?.split(',')}
                        mt={linkable ? [1, '-3px'] : [1, 0]}
                        ml={['0', 2]}
                        interactive={linkable}
                    />
                </Flex>
            </Box>
            <Text as="div" mb="auto">
                {abstract}
            </Text>
            {children}
        </Stack>
    )
}
