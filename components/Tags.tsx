import React from 'react'
import {
    Flex,
    FlexProps,
    Link as ChackraLink,
    Tag as ChakraTag,
    TagProps as ChakraTagProps,
} from '@chakra-ui/react'

export interface TagProps extends ChakraTagProps {
    name: string
    interactive?: boolean
}

export const Tag: React.FC<TagProps> = ({ name, interactive = true, ...props }) => {
    const propsOverride = {
        size: 'sm',
        verticalAlign: 'middle',
    }
    if (!interactive) {
        return (
            <ChakraTag {...props} {...propsOverride}>
                {name}
            </ChakraTag>
        )
    }

    return (
        <ChackraLink to={`/posts?tag=${name}`}>
            <ChakraTag {...props} {...propsOverride}>
                {name}
            </ChakraTag>
        </ChackraLink>
    )
}

export interface TagsProps extends FlexProps {
    interactive?: boolean
    tags?: string[]
    tagProps?: Partial<TagProps>
}

export const Tags: React.FC<TagsProps> = ({ tags, interactive = true, ...props }) => {
    if (!tags || tags.length === 0) {
        return null
    }
    return (
        <Flex alignItems="center" flexWrap="wrap" m="-2px" {...props}>
            {tags.map((tag) => (
                <Tag key={tag} name={tag} interactive={interactive} m="2px" colorScheme="cyan" />
            ))}
        </Flex>
    )
}
