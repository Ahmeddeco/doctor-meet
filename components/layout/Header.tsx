import {
	SignedIn,
	SignedOut,
	SignIn,
	SignInButton,
	UserButton,
} from "@clerk/nextjs"
import Logo from "./Logo"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { checkUser } from "@/lib/checkUser"
import Link from "next/link"
import { Button } from "../ui/button"
import {
	Calendar,
	CreditCard,
	ShieldCheck,
	Stethoscope,
	User,
} from "lucide-react"
import { Badge } from "../ui/badge"

const Header = async () => {
	const user = await checkUser()

	return (
		<header className="fixed inset-0 px-4 lg:px-16 h-14 flex items-center justify-between border-b shadow-lg bg-background/90 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 ">
			<Logo />
			{/* <DesktopNav />
			<MobileNav />
			<UserButton /> */}

			<nav className="flex items-center gap-2">
				<SignedIn>
					{/* ---------------------------------- Admin --------------------------------- */}
					{user?.role === "ADMIN" && (
						<Button asChild size={"sm"}>
							<Link href={"/admin"}>
								<ShieldCheck />
								admin dashboard
							</Link>
						</Button>
					)}

					{/* --------------------------------- Doctor --------------------------------- */}
					{user?.role === "DOCTOR" && (
						<Button asChild size={"sm"}>
							<Link href={"/doctor"}>
								<Stethoscope />
								doctor dashboard
							</Link>
						</Button>
					)}

					{/* --------------------------------- Patient -------------------------------- */}
					{user?.role === "PATIENT" && (
						<Button asChild size={"sm"}>
							<Link href={"/appointments"}>
								<Calendar />
								my appointments
							</Link>
						</Button>
					)}

					{/* ------------------------------- Unassigned ------------------------------- */}
					{user?.role === "UNASSIGNED" && (
						<Button size={"sm"}>
							<User />
							complete profile
						</Button>
					)}
				</SignedIn>

				{(!user || user?.role !== "ADMIN") && (
					<Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
						<Badge variant={"secondary"}>
							<CreditCard />
							<span className="text-primary">
								{user && user.role !== "ADMIN" ? (
									<>
										{user.credits}{" "}
										<span className="hidden md:inline">
											{user?.role === "PATIENT" ? "Credits" : "Earned Credits"}
										</span>
									</>
								) : (
									<>Pricing</>
								)}
							</span>
						</Badge>
					</Link>
				)}

				<SignedOut>
					<SignInButton>
						<Button>sign in</Button>
					</SignInButton>
				</SignedOut>

				<SignedIn>
					<UserButton />
				</SignedIn>
			</nav>
		</header>
	)
}

export default Header
