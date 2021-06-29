import { Link as ChackraLink, Text, useColorModeValue } from '@chakra-ui/react'

const HeadRenderer = ({ ...children }) => {
  return <Text fontSize="3xl" color={useColorModeValue('blue.500', 'blue.300')} {...children} />
}
const LinkRenderer = ({ ...children }) => {
  return <ChackraLink color={useColorModeValue('blue.500', 'blue.300')} {...children} />
}
const renderers = {
  h1: HeadRenderer,
  a: LinkRenderer,
}

export default renderers
