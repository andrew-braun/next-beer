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
				{Object.entries(locations).length && (
					<div className={`${styles.cardGridContainer} page-section`}>
						<h2 className={`sectionHeading`}>Beer Locations</h2>
						<CardGrid cards={locations.data} />
					</div>
				)}
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
		revalidate: 43200, // In seconds
	}
}
