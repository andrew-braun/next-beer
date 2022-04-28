import Link from "next/link"
const Card = ({ title, link }) => {
	return (
		<article>
			<Link href={link}>
				<a>
					<h3>{title}</h3>
				</a>
			</Link>
		</article>
	)
}

export default Card
