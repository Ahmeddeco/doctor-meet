import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const CTA = () => {
	return (
		<section>
			<div className="container mx-auto px-4">
				<Card className="bg-gradient-to-r from-green-900/30 to-green-950/20 border-green-800/20">
					<CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
						<div className="max-w-2xl relative z-10">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Ready to take control of your healthcare?
							</h2>
							<p className="text-lg text-muted-foreground mb-8">
								Join thousands of users who have simplified their healthcare
								journey with our platform. Get started today and experience
								healthcare the way it should be.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button asChild size="lg">
									<Link href="/sign-up">Sign Up Now</Link>
								</Button>
								<Button asChild variant="outline" size="lg">
									<Link href="#pricing">View Pricing</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default CTA
