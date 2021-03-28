import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Button, Heading, Flex, Spacer, Divider, Wrap, WrapItem } from '@chakra-ui/react'
import navbarData from '../data/navbar'

function Header() {
    const { asPath } = useRouter()

    const menuBtnStyle = (path: string) => {
        if (path === asPath) {
            return {
                bg: 'blue.500',
                color: 'white',
                variant: 'solid',
                _hover: { bg: 'blue.600' },
            }
        }

        return {
            variant: 'ghost',
        }
    }

    return (
        <>
            <Flex
                direction={['column', 'row', 'row']}
                justifyContent="center"
                alignItems="center"
                mb="2rem"
            >
                <Link href="/">
                    <Box style={{ cursor: 'pointer' }} mb={['2rem', 0, 0]}>
                        <Heading as="h1" size="xl" textAlign={['center', 'left', 'left']}>
                            Ziyi Xi
                        </Heading>
                        <Heading as="h2" size="l">
                            Ph.D. student in computational seismology
                        </Heading>
                    </Box>
                </Link>
                <Spacer />
                <Wrap spacing={2}>
                    {navbarData.map((link) => (
                        <WrapItem key={link.name}>
                            <Link href={link.path} passHref>
                                <Box as="a">
                                    <Button isFullWidth size="sm" {...menuBtnStyle(link.path)}>
                                        {link.name}
                                    </Button>
                                </Box>
                            </Link>
                        </WrapItem>
                    ))}
                </Wrap>
            </Flex>
            <Divider />
        </>
    )
}

export default Header
