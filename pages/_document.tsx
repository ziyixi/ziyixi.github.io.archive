import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <script src="https://cdn.jsdelivr.net/gh/SardineFish/raindrop-fx@master/bundle/index.js"></script>
                </Head>
                <body>
                    <Main />
                    <canvas id="canvas"></canvas>
                    <NextScript />
                    <script src="asset/rain-canvas-script.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
