import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import styles from "../styles/Home.module.css"
import { fetchLocations } from "../lib/strapi/locations"
import Banner from "../components/content/Banner"
import Card from "../components/content/Card"
import CardGrid from "../components/content/CardGrid"

export default function Home({ locations }) {
	return (
		<Fragment>
			<Head>
				<title>Next Beer</title>
				<meta name="description" content="Discover good beer near you!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner />
				<CardGrid cards={locations.data} />
			</main>
		</Fragment>
	)
}

export async function getStaticProps({ params }) {
	const locations = await fetchLocations()

	return {
		props: {
			locations,
		},
	}
}
