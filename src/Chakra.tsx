import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'

import type { NextApiRequest } from 'next'
import { ReactChild } from 'react'

const Chakra = ({
  cookies,
  children,
}: {
  cookies: string | undefined
  children: ReactChild | ReactChild[]
}) => {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager
  return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>
}

const getServerSideProps = ({ req }: { req: NextApiRequest }) => {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  }
}

export { Chakra, getServerSideProps }
