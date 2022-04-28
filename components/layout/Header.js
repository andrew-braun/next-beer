import styles from "./Header.module.css"

const Header = () => {
	return (
		<header className={styles.mainHeader}>
			<span>Next</span> <span className={styles.titleSectionTwo}>Beer</span>
		</header>
	)
}

export default Header
