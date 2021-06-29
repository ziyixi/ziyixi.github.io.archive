import { Box, Center, HStack, Icon, Link as LinkUI, Text, Wrap, WrapItem } from '@chakra-ui/react'

import socialItems from '../data/social'

function Footer() {
  return (
    <Box p="2rem">
      <Center>
        <Wrap spacing={16}>
          <HStack spacing={8}>
            {socialItems.map((item) => (
              <LinkUI href={item.href} key={item.name} target="_blank" rel="noreferrer">
                <Icon as={item.icon} />
              </LinkUI>
            ))}
          </HStack>
          <WrapItem key="footer">
            <Box style={{ whiteSpace: 'nowrap' }}>
              <Text fontSize="sm">
                &copy; Ziyi Xi 2020-2021, Build with{' '}
                <LinkUI href="https://nextjs.org/" color="teal.500" isExternal>
                  Next.js
                </LinkUI>{' '}
                and{' '}
                <LinkUI href="https://www.typescriptlang.org/" color="teal.500" isExternal>
                  Typescript
                </LinkUI>
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  )
}

export default Footer
