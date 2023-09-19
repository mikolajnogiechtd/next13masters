import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next13Masters",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav>
					<ul className="mt-2 flex justify-center space-x-4">
						<li>
							<ActiveLink
								href="/"
								className="text-blue-400 hover:text-blue-600"
								activeClassName="border-b-2 border-blue-400"
							>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href={"/products/1"}
								className="text-blue-400 hover:text-blue-600"
								activeClassName="border-b-2 border-blue-400"
							>
								All
							</ActiveLink>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
