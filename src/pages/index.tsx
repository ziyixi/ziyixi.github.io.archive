import Bio from '../components/Bio'
import { Divider } from '@chakra-ui/react'
import Featured from '../components/Featured'
import featuredData from '../data/featured'
import longmd from '../data/bio/long'
import shortmd from '../data/bio/short'

const Home = () => {
  return (
    <>
      <Bio shortmd={shortmd} longmd={longmd} />
      <Divider mt="2rem" mb="2rem" />
      <Featured featuredData={featuredData} />
    </>
  )
}

export default Home
