import { Link as ChackraLink, Text } from '@chakra-ui/react'

const HeadRenderer = ({ ...children }) => <Text fontSize="3xl" color="blue.500" {...children} />
const LinkRenderer = ({ ...children }) => <ChackraLink color="blue.700" {...children} />
const renderers = {
    heading: HeadRenderer,
    link: LinkRenderer,
}

export default renderers
