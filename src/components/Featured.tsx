import { Grid, GridItem, Heading, Link, Tag, useColorModeValue } from '@chakra-ui/react'

import type { featuredDataItem } from '../data/featured'

const FeaturedItem = ({ item }: { item: featuredDataItem }) => (
  <Link href={item.url} key={item.title}>
    <GridItem p="1rem" border="1px" borderColor="gray.300" borderRadius={5}>
      <Heading size="s" color={useColorModeValue('blue.700', 'blue.300')} mb="0.5rem">
        {' '}
        {item.medium} <Tag colorScheme="orange"> {item.lang} </Tag>{' '}
      </Heading>
      <Heading size="md"> {item.title} </Heading>
    </GridItem>
  </Link>
)

const Featured = ({ featuredData }: { featuredData: featuredDataItem[] }) => {
  return (
    <>
      <Heading mb="2rem">Currently I am working on</Heading>
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={6}>
        {featuredData.map((item) => (
          <FeaturedItem item={item} key={item.title} />
        ))}
      </Grid>
    </>
  )
}

export default Featured
