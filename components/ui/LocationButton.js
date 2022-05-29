import { useState, useEffect } from "react"
import styles from "./LocationButton.module.css"

export default function LocationButton({
	text,
	onClick,
	classes,
	isLocationLoading,
	isDataLoading,
	error,
}) {
	const [buttonText, setButtonText] = useState()

	let appliedClasses =
		isLocationLoading || isDataLoading
			? `button ${styles.locationButton} ${classes} loadingButton`
			: `button ${styles.locationButton} ${classes}`

	useEffect(() => {
		isLocationLoading || isDataLoading
			? setButtonText("Locating...")
			: setButtonText(text)
	}, [isLocationLoading, buttonText, isDataLoading])

	return (
		<>
			<button className={appliedClasses} onClick={onClick}>
				{buttonText}
			</button>
			{error && (
				<p className={styles.errorMessage}>
					{error}. Please allow location permissions in your browser.
				</p>
			)}
		</>
	)
}
