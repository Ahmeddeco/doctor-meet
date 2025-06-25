import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const roboto = localFont({
	src: "../public/fonts/Roboto.ttf",
})

export const metadata: Metadata = {
	title: "Doctor Meet",
	description: "Doctor meet, The first on line hospital.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				cssLayerName: "clerk",
			}}
		>
			<html lang="en" suppressHydrationWarning>
				<body className={`${roboto.className} antialiased`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						<main className="min-h-dvh pt-14 ">{children}</main>
						<Footer />
						<Toaster />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
