import Link from "next/link"
import styles from "./Header.module.css"

const Header = () => {
	return (
		<header className={styles.mainHeader}>
			<Link href="/">
				<a>
					<span className={styles.titleSectionOne}>Next</span>{" "}
					<span className={styles.titleSectionTwo}>Beer</span>
				</a>
			</Link>
		</header>
	)
}

export default Header
