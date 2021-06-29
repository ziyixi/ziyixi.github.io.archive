import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Wrap,
  WrapItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import Link from 'next/link'
import navbarData from '../data/navbar'
import { useRouter } from 'next/router'

const Header = () => {
  const bgColor = useColorModeValue('blue.500', 'blue.500')
  const hoverColor = useColorModeValue('blue.600', 'blue.600')
  const textColor = useColorModeValue('white', 'white')
  const menuBtnStyle = (path: string, currentPath: string) => {
    if (path === currentPath) {
      return {
        bg: bgColor,
        color: textColor,
        variant: 'solid',
        _hover: { bg: hoverColor },
      }
    }

    return {
      variant: 'ghost',
    }
  }

  const { asPath } = useRouter()
  const { toggleColorMode } = useColorMode()
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
              Ph.D. candiate in computational seismology
            </Heading>
          </Box>
        </Link>
        <Spacer />
        <Wrap spacing={2}>
          {navbarData.map((link) => (
            <WrapItem key={link.name}>
              <Link href={link.path} passHref>
                <Box as="a">
                  <Button isFullWidth size="sm" {...menuBtnStyle(link.path, asPath)}>
                    {link.name}
                  </Button>
                </Box>
              </Link>
            </WrapItem>
          ))}
          <IconButton
            size="sm"
            aria-label="Search database"
            isRound
            onClick={toggleColorMode}
            // icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          />
        </Wrap>
      </Flex>
      <Divider />
    </>
  )
}

export default Header
