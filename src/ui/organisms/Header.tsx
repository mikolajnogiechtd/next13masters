import React from "react";
import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";

export const Header = () => {
	return (
		<header className="fixed left-0 top-0 flex w-full items-center justify-center py-4 shadow-md backdrop-blur-xl">
			<div className="flex w-full max-w-7xl items-center justify-between">
				<nav>
					<ul className="flex justify-center space-x-4 ">
						<li>
							<ActiveLink
								href="/"
								className="p-4 text-blue-400 hover:text-blue-600"
								activeClassName="border-b-2 border-blue-400"
							>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href={"/products/1"}
								className="p-4 text-blue-400 hover:text-blue-600"
								activeClassName="border-b-2 border-blue-400"
							>
								All
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<button type="button">
					<ShoppingCart />
				</button>
			</div>
		</header>
	);
};
