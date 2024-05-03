import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Foother } from "./components/foother";
import { NoCookieGoogleAnalytics } from "./components/google-analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Martin Loretz",
	description: "I'm an engineer and I like to build things.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex min-h-screen flex-col items-center justify-between font-mono">
					<div className="z-10 w-full max-w-5xl items-center justify-between lg:flex pt-24 pb-24 md:pb:8 px-8 md:px-24">
						{children}
					</div>
					<Foother />
				</main>
			</body>
			<NoCookieGoogleAnalytics gaId="G-JZH07ZNDC6" />
		</html>
	);
}
