import { Badge, Link, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react'

import { CheckCircleIcon } from '@chakra-ui/icons'
import { formatDate } from '../utils/format'
import slidesData from '../data/slides'
import type { slidesDataItem } from '../data/slides'

const Slides = () => {
  const baseColor = useColorModeValue('gray.700', 'white')
  const hoverColor = useColorModeValue('gray.600', 'gray.200')
  return (
    <>
      <List spacing={3}>
        {slidesData
          ? slidesData.map((item: slidesDataItem) => (
              <ListItem key={item.name}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Link
                  href={`/google-slides/${item.link.split('/').pop()}`}
                  //   fontSize="2xl"
                  color={baseColor}
                  fontWeight="700"
                  _hover={{
                    color: { hoverColor },
                    textDecor: 'underline',
                  }}
                >
                  {item.name}
                </Link>
                <Badge borderRadius="full" px="2" colorScheme="blue" ml={1}>
                  {formatDate(item.date)}
                </Badge>
              </ListItem>
            ))
          : ''}
      </List>
    </>
  )
}

export default Slides
