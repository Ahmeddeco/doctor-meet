import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { features } from "@/constants/indexl"
import React from "react"

const HowItWorks = () => {
	return (
		<section className=" bg-muted/20 ">
			<div className="container mx-auto px-4 flex flex-col items-center gap-8">
				<div className="flex flex-col items-center gap-4 ">
					<h2 className="text-primary">how it works</h2>
					<h6 className="max-w-xl text-balance text-center">
						our platform makes helthcare accessible woth just a few clicks.
					</h6>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					{features.map(({ description, icon, title }, i) => (
						<Card
							key={i}
							className="hover:border-emerald-800 transition-all ease-in-out"
						>
							<CardHeader>
								<div className="text-primary bg-accent w-fit p-3 rounded-full flex items-center justify-center">
									{React.createElement(icon)}
								</div>
								<CardTitle>
									<h5>{title}</h5>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
