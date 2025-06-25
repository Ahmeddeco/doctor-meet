import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/constants/indexl"

const Testimonials = () => {
	return (
		<section className=" bg-muted/20">
			<div className="container mx-auto px-4 flex flex-col items-center gap-8">
				<Badge>success stories</Badge>
				<h2>what our users say?</h2>
				<p>Hear from patients and doctors who use our platform</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map(({ initials, name, quote, role }, i) => (
						<Card key={i}>
							<CardContent>
								<div className="flex items-center gap-4">
									<Badge className="rounded-full p-4 ">{initials}</Badge>
									<div>
										<h5>{name}</h5>
										<p>{role}</p>
									</div>
								</div>
								<p>&quot;{quote}&quot;</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
