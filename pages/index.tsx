import { NextPage } from 'next'
import { Divider } from '@chakra-ui/react'
import Bio from '../components/Bio'
import Featured from '../components/Featured'

const Home: NextPage = () => {
    return (
        <>
            <Bio />
            <Divider mt="2rem" mb="2rem" />
            <Featured />
            <Divider mt="2rem" mb="2rem" />
            {/* <Rain background="/bg.png" position="fixed" top="0" bottom="0" left="0" right="0" /> */}
        </>
    )
}
export default Home
