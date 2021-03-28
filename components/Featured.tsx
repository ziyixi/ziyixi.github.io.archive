import { Heading, Grid, GridItem, Tag, Link } from '@chakra-ui/react'
import featuredData from '../data/featured'

function Featured() {
    return (
        <>
            <Heading mb="2rem">Currently I am working on</Heading>
            <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={6}>
                {featuredData.map((item) => (
                    <Link href={item.url} key={item.title}>
                        <GridItem p="1rem" border="1px" borderColor="gray.300" borderRadius={5}>
                            <Heading size="s" color="blue.700" mb="0.5rem">
                                {' '}
                                {item.medium} <Tag colorScheme="orange"> {item.lang} </Tag>{' '}
                            </Heading>
                            <Heading size="md" color="gray.900">
                                {' '}
                                {item.title}{' '}
                            </Heading>
                        </GridItem>
                    </Link>
                ))}
            </Grid>
        </>
    )
}

export default Featured
