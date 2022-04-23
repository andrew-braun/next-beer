import { Fragment } from "react"
import "../styles/globals.css"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</Fragment>
	)
}

export default MyApp
