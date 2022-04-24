import PouringBeer from "../../public/static/images/pouring-beer.svg"
import styles from "./Banner.module.css"
const Banner = (props) => {
	const clickHandler = (event) => {
		console.log(event)
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
				<button className={`button`} onClick={clickHandler}>
					Find Beer
				</button>
			</div>
		</div>
	)
}

export default Banner
