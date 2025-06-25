import Consultation from "@/components/pages/home/Consultation"
import CTA from "@/components/pages/home/CTA"
import Hero from "@/components/pages/home/Hero"
import HowItWorks from "@/components/pages/home/HowItWorks"
import Testimonials from "@/components/pages/home/Testimonials"

export default function HomePage() {
	return (
		<>
			<Hero />
      <HowItWorks />
			<Consultation />
			<Testimonials />
			<CTA />
		</>
	)
}
