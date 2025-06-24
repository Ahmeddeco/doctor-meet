import Image from "next/image"
import Link from "next/link"

const Logo = () => {
	return (
		<>
			<Link href={"/"}>
				<div className="relative size-10">
					<Image src={"/images/logo-single.webp"} alt={"logo"} fill />
				</div>
			</Link>
		</>
	)
}

export default Logo
