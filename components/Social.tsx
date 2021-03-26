import { Wrap, WrapItem } from '@chakra-ui/react'
import { Icon, Text } from '@chakra-ui/react'
import GitHubIcon from '@material-ui/icons/GitHub'
import SchoolIcon from '@material-ui/icons/School'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import { Link as LinkUI } from '@chakra-ui/react'
import Link from 'next/link'

function Social() {
    return (
        <>
            <Wrap spacing={8}>
                <WrapItem key="github">
                    <a href="https://github.com/ziyixi" target="_blank" rel="noreferrer">
                        <Icon as={GitHubIcon} />
                    </a>
                </WrapItem>
                <WrapItem key="scholar">
                    <a
                        href="https://scholar.google.com/citations?user=boNM4acAAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon as={SchoolIcon} />
                    </a>
                </WrapItem>
                <WrapItem key="mail">
                    <a href="mailto:xiziyi@msu.edu" target="_blank" rel="noreferrer">
                        <Icon as={MailIcon} />
                    </a>
                </WrapItem>
                <WrapItem key="phone">
                    <a href="tel:+1-517-505-0802" target="_blank" rel="noreferrer">
                        <Icon as={PhoneIcon} />
                    </a>
                </WrapItem>
                <WrapItem key="space">
                    <div></div>
                </WrapItem>
                <WrapItem key="footer">
                    <div style={{ whiteSpace: 'nowrap' }}>
                        <Text fontSize="sm">
                            &copy; Ziyi Xi 2020-2021, Build with{' '}
                            <LinkUI
                                as={Link}
                                href="https://nextjs.org/"
                                color="purple.500"
                                isExternal
                            >
                                Next.js
                            </LinkUI>{' '}
                            and{' '}
                            <LinkUI
                                as={Link}
                                href="https://www.typescriptlang.org/"
                                color="purple.500"
                                isExternal
                            >
                                Typescript
                            </LinkUI>
                        </Text>
                    </div>
                </WrapItem>
            </Wrap>
        </>
    )
}

export default Social
