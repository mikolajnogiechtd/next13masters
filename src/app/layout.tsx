import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Header } from "@/ui/organisms/Header";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next13Masters",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={classNames(inter.className, "flex min-h-screen flex-col")}>
				<Header />
				<main className="mx-auto mt-24 w-full max-w-7xl flex-1 text-left">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
