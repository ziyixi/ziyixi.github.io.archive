import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import { Flex } from '@chakra-ui/react'
import Pagination from '@choc-ui/paginator'
import { SizeMe } from 'react-sizeme'
import { pdfjs } from 'react-pdf'
import { useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const PdfViewer = ({ pdfPath }: { pdfPath: string }) => {
  const [current, setCurrent] = useState(1)
  const [pageNumber, setPageNumber] = useState(10)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setPageNumber(numPages)
    setCurrent(1)
  }

  return (
    <>
      <SizeMe>
        {({ size }) => (
          <Document
            file={pdfPath}
            // options={{ workerSrc: '/pdf.worker.js' }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={current}
              width={size.width ? size.width : 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
      </SizeMe>

      <Flex
        w="full"
        p={5}
        alignItems="center"
        justifyContent="center"
        // bg={useColorModeValue('gray.400', 'gray.600')}
      >
        <Pagination
          current={current}
          defaultCurrent={1}
          total={pageNumber * 10}
          onChange={(currentPage: number | undefined) => {
            if (currentPage) {
              setCurrent(currentPage)
            }
          }}
          paginationProps={{ display: 'flex' }}
          colorScheme="blue"
          rounded="full"
        />
      </Flex>
    </>
  )
}

export default PdfViewer
