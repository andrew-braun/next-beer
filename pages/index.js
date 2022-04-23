import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Beer Discovery</title>
				<meta name="description" content="Discover good beer near you!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Beer Discovery</h1>
			</main>
		</Fragment>
	)
}
