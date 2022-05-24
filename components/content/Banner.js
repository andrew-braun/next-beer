import useLocation from "../../hooks/use-location"
import PouringBeer from "../../public/static/images/pouring-beer.svg"
import styles from "./Banner.module.css"
import LocationButton from "../ui/LocationButton"
const Banner = ({ cardGridRef }) => {
	const { handleFindLocation, latLon, locationErrorMsg, isLoading } =
		useLocation()
	const handleButtonClick = (event) => {
		handleFindLocation(event)
		cardGridRef.current.scrollIntoView()
	}

	return (
		<div className={styles.banner}>
			<div className={styles.bannerImageContainer}>
				<PouringBeer />
			</div>
			<div className={styles.bannerContent}>
				<div className={styles.bannerText}>
					<h1 className={styles.title}>
						<span
							className={`${styles.titleSection} ${styles.titleSectionOne}`}
						>
							Where's the
						</span>
						<span
							className={`${styles.titleSection} ${styles.titleSectionTwo}`}
						>
							beer?
						</span>
					</h1>

					<p className={styles.subtitle}>Find the best brews near you!</p>
				</div>
				<LocationButton
					text="Find Beer Near You"
					onClick={handleButtonClick}
					isLoading={isLoading}
					classes={styles.bannerButton}
					error={locationErrorMsg}
				/>
			</div>
		</div>
	)
}

export default Banner
