import { UserButton } from "@clerk/nextjs"
import Logo from "./Logo"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header = () => {
	return (
		<header className="fixed inset-0 px-4 lg:px-16 h-14 flex items-center justify-between border-b shadow-lg bg-background/90 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 ">
			<Logo />
			<DesktopNav />
			<MobileNav />
			<UserButton />
		
		</header>
	)
}

export default Header
