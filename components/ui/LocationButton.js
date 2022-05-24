import { useState, useEffect } from "react"
import styles from "./LocationButton.module.css"

export default function LocationButton({
	text,
	onClick,
	classes,
	isLoading,
	error,
}) {
	const [buttonText, setButtonText] = useState()

	let appliedClasses = isLoading
		? `button ${styles.locationButton} ${classes} loadingButton`
		: `button ${styles.locationButton} ${classes}`

	useEffect(() => {
		isLoading ? setButtonText("Locating...") : setButtonText(text)
	}, [isLoading, buttonText])

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
