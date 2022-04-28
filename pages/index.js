import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import styles from "../styles/Home.module.css"
import Banner from "../components/content/Banner"
import Card from "../components/content/Card"

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Next Beer</title>
				<meta name="description" content="Discover good beer near you!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner />
				<Card title="Tsota Tsota" link="/location/tsota-tsota" />
			</main>
		</Fragment>
	)
}
