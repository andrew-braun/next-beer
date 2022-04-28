import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import styles from "../styles/Home.module.css"
import { fetchLocations } from "../lib/strapi/locations"
import Banner from "../components/content/Banner"
import Card from "../components/content/Card"
import CardGrid from "../components/content/CardGrid"

export default function Home({ locations }) {
	console.log(locations.data)
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
				<CardGrid cards={locations.data} />
			</main>
		</Fragment>
	)
}

export async function getServerSideProps(context) {
	const locations = await fetchLocations()
	console.log(locations)
	return {
		props: {
			locations,
		}, // will be passed to the page component as props
	}
}
