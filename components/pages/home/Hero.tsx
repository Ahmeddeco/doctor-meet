import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Hero = () => {
	return (
		<section className="h-dvh flex items-center justify-between">
			{/* ---------------------------------- text ---------------------------------- */}
			<div className="h-full w-full lg:w-1/2 flex flex-col justify-center gap-8">
				<Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2">
					Healthcare made simple
				</Badge>
				<h1>
					Connect with doctors <br />
					<span className="gradient-title">anytime, anywhere</span>
				</h1>
				<p>
					Book appointments, consult via video,
					<br /> and manage your healthcare journey all in one secure platform.{" "}
				</p>
				<div className="flex items-center gap-4">
					<Button>
						get started <ArrowRight />
					</Button>
					<Button variant={"link"}>find doctors</Button>
				</div>
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<div className="h-full w-full lg:w-1/2  flex items-center justify-center">
				<div className="w-full h-[70%] relative">
					<Image src={"/images/banner2.webp"} alt={"doctors"} fill />
				</div>
			</div>
		</section>
	)
}

export default Hero
