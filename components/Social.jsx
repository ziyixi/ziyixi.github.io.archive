import { Grid, GridItem, Box } from '@chakra-ui/react';
import { Icon, Flex, Spacer, Text, ExternalLinkIcon } from '@chakra-ui/react';
import GitHubIcon from '@material-ui/icons/GitHub';
import SchoolIcon from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link as LinkUI } from '@chakra-ui/react';
import Link from 'next/link';

function Social() {
  return (
    <>
      <Flex direction={['row', 'row']}>
        <Grid gridTemplateColumns="repeat(5, 1fr)" gap={5}>
          <GridItem key="github">
            <Box w="50px" h="50px">
              <a href="https://github.com/ziyixi" target="_blank" rel="noreferrer">
                <Icon as={GitHubIcon} />
              </a>
            </Box>
          </GridItem>
          <GridItem key="scholar">
            <Box w="50px" h="50px">
              <a
                href="https://scholar.google.com/citations?user=boNM4acAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer">
                <Icon as={SchoolIcon} />
              </a>
            </Box>
          </GridItem>
          <GridItem key="mail">
            <Box w="50px" h="50px">
              <a href="mailto:xiziyi@msu.edu" target="_blank" rel="noreferrer">
                <Icon as={MailIcon} />
              </a>
            </Box>
          </GridItem>
          <GridItem key="phone">
            <Box w="50px" h="50px">
              <a href="tel:+1-517-505-0802" target="_blank" rel="noreferrer">
                <Icon as={PhoneIcon} />
              </a>
            </Box>
          </GridItem>
          <GridItem key="space">
            <Box w="50px" h="50px"></Box>
          </GridItem>
        </Grid>
        <Box w="300px" h="50px">
          <div style={{ whiteSpace: 'nowrap' }}>
            <Text fontSize="sm">
              &copy; Ziyi Xi 2020, Build with{' '}
              <LinkUI as={Link} href="https://nextjs.org/" color="purple.500" isExternal>
                Next.js
              </LinkUI>
            </Text>
          </div>
        </Box>
      </Flex>
    </>
  );
}

export default Social;
