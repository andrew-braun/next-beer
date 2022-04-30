import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/Raleway-VariableFont_wght.woff2"
						as="font"
						crossorigin="anonymous"
					></link>
				</Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
