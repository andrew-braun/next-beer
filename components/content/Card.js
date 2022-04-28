import Link from "next/link"
const Card = ({ name, link }) => {
	return (
		<article>
			<Link href={link}>
				<a>
					<h3>{name}</h3>
				</a>
			</Link>
		</article>
	)
}

export default Card
