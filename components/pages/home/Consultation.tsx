import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { creditBenefits } from "@/constants/indexl"
import { PricingTable } from "@clerk/nextjs"
import { Check, Stethoscope } from "lucide-react"

const Consultation = () => {
	return (
		<section
			className=" container mx-auto px-4 flex flex-col items-center gap-8"
			id="pricing"
		>
			<div className="flex flex-col items-center gap-8 ">
				<Badge>affordable healthcare</Badge>
				<h2>consultation packages</h2>
				<h6>
					chose the perfect consultation package that fits your healthcare needs
				</h6>
			</div>

			<div className="flex flex-col lg:flex-row items-center w-full">
				<PricingTable />
			</div>

			{/* ------------------------- How Credit System Works ------------------------ */}
			<Card className="mt-12 bg-muted/20 border-emerald-900/30">
				<CardHeader>
					<CardTitle className=" font-semibold flex gap-4 items-center">
						<Stethoscope className="text-primary" />
						<h4>How Our Credit System Works</h4>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						{creditBenefits.map((benefit, index) => (
							<div className="flex items-center gap-4" key={index}>
								<Check className="text-primary" />
								<p>{benefit}</p>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</section>
	)
}

export default Consultation
