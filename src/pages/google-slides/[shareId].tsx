import slidesData, { slidesDataItem } from '../../data/slides'

import { Center } from '@chakra-ui/react'
// import ReactGoogleSlides from 'react-google-slides'
import dynamic from 'next/dynamic'

const ReactGoogleSlides = dynamic(() => import('react-google-slides'), { ssr: false })

export const getStaticProps = async (context: { params: { shareId: string } }) => {
  const shareId = context.params.shareId
  const slideLink = 'https://docs.google.com/presentation/d/'.concat(shareId)

  return {
    props: {
      slideLink,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const paths = slidesData.map((item: slidesDataItem) => {
    const popVal = item.link.split('/').pop()
    if (popVal) {
      return '/google-slides/'.concat(popVal)
    }
  })

  return {
    paths,
    fallback: false,
  }
}

const Slide = ({ slideLink }: { slideLink: string }) => {
  return (
    <Center>
      <ReactGoogleSlides
        width="100%"
        height={600}
        slidesLink={slideLink}
        slideDuration={30}
        position={1}
        showControls
        loop
      />
    </Center>
  )
}

export default Slide
