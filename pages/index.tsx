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
        </>
    )
}
export default Home
