import dynamic from 'next/dynamic'
import { useColorModeValue } from '@chakra-ui/react'

const PdfViewer = dynamic(() => import('../components/PdfViewer'), { ssr: false })

const Resume = () => <PdfViewer pdfPath={useColorModeValue('cv/cv.pdf', 'cv/cv_black.pdf')} />

export default Resume
