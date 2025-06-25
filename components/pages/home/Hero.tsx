import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Hero = () => {
	return (
		<section className="h-dvh flex lg:flex-row flex-col items-center justify-between container mx-auto px-4">
			{/* ---------------------------------- text ---------------------------------- */}
			<div className="h-full w-full lg:w-1/2 flex flex-col justify-center gap-8 ">
				<Badge>Healthcare made simple</Badge>
				<h1 className="lg:text-start text-center">
					Connect with doctors <br />
					<span className="gradient-title">anytime, anywhere</span>
				</h1>
				<p className="max-w-lg text-balance text-center lg:text-start">
					Book appointments, consult via video, and manage your healthcare
					journey all in one secure platform.
				</p>
				<div className="flex items-center lg:justify-start justify-center gap-4 ">
					<Button>
						get started <ArrowRight />
					</Button>
					<Button variant={"link"}>find doctors</Button>
				</div>
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<div className="h-full w-full lg:w-1/2  flex items-center ">
				<div className="w-full h-[70%] relative">
					<Image
						src={"/images/banner2.webp"}
						alt={"doctors"}
						fill
						className="object-contain"
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
