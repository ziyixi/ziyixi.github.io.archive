import { Box, Center } from '@chakra-ui/react'
import Social from './Social'

function Footer() {
    return (
        <div>
            <Box bg="blue.50" p="2rem">
                <Center>
                    <Social />
                </Center>
            </Box>
        </div>
    )
}

export default Footer
