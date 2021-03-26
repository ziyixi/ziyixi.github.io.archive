import React, { useState } from 'react'
import { Text, Button, Stack } from '@chakra-ui/react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { SizeMe } from 'react-sizeme'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function PdfViewer({ url }: { url: string }) {
    const [numPages, setNumPages] = useState(1)
    const [pageNumber, setPageNumber] = useState(1) //setting 1 to show fisrt page

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
        setPageNumber(1)
    }

    function changePage(offset: number) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset)
    }

    function previousPage() {
        changePage(-1)
    }

    function nextPage() {
        changePage(1)
    }

    return (
        <>
            <SizeMe>
                {({ size }) => (
                    <Document
                        file={url}
                        // options={{ workerSrc: '/pdf.worker.js' }}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page
                            pageNumber={pageNumber}
                            width={size.width ? size.width : 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                )}
            </SizeMe>
            <Stack spacing={4} direction="row" align="center">
                <Text fontSize="xl">
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </Text>

                <Button
                    colorScheme="blue"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    size="xs"
                >
                    Previous
                </Button>
                <Button
                    colorScheme="blue"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    size="xs"
                >
                    Next
                </Button>
            </Stack>
        </>
    )
}

export default PdfViewer
