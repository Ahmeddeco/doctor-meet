import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
  LucideIcon,
} from "lucide-react"

type featureType = {
  icon: LucideIcon,
  title: string,
  description:
  string,
}[]

type testimonialsType = {
  initials: string,
  name: string,
  role: string,
  quote: string
}[]

export const features: featureType = [
  {
    icon: User,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: Calendar,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: Video,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: CreditCard,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: FileText,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
]

export const testimonials: testimonialsType = [
  {
    initials: "SP",
    name: "Sarah P.",
    role: "Patient",
    quote:
      "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    initials: "DR",
    name: "Dr. Robert M.",
    role: "Cardiologist",
    quote:
      "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Patient",
    quote:
      "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
]

export const creditBenefits = [
  "Each consultation requires 2 credits regardless of duration",
  "Credits never expire - use them whenever you need",
  "Monthly subscriptions give you fresh credits every month",
  "Cancel or change your subscription anytime without penalties",
]
