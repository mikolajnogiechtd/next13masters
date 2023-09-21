"use client";

import React, { type ChangeEvent } from "react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { ActiveLink } from "../atoms/ActiveLink";
import { useDebounce } from "@/hooks/useDebounce";

const navLinks = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products/1", label: "All", exact: true },
	{ href: "/collections/summer-vibes", label: "Summer Vibes", exact: true },
	{ href: "/collections/new-arrivals", label: "New Arrivals", exact: true },
	{ href: "/collections/elegant-extras", label: "Elegant Extras", exact: true },
	{ href: "/categories", label: "Categories", exact: false },
	{ href: "/categories/t-shirts/1", label: "T-Shirts", exact: true },
	{ href: "/categories/hoodies/1", label: "Hoodies", exact: true },
	{ href: "/categories/accessories/1", label: "Accessories", exact: true },
] as const;

export const Header = () => {
	const router = useRouter();

	const setSearchValueFunc = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		if (!newValue) {
			router.back();
			return;
		}

		router.push(`/search?query=${newValue}`);
	};
	const debounceSearchValue = useDebounce(setSearchValueFunc, 500);

	return (
		<header className="fixed left-0 top-0 flex w-full items-center justify-center py-4 shadow-md backdrop-blur-xl">
			<div className="flex w-full items-center justify-between px-16">
				<input
					type="text"
					placeholder="Search product by name"
					role="searchbox"
					onChange={(event) => debounceSearchValue(event)}
					className="w-56 rounded-md border-2 border-gray-300 px-2 py-1 focus:border-blue-400 focus:outline-none"
				/>
				<nav>
					<ul className="flex justify-center space-x-4 ">
						{navLinks.map(({ href, label, exact }) => (
							<li key={"link-" + href}>
								<ActiveLink
									href={href}
									className="p-4 text-blue-400 hover:text-blue-600"
									activeClassName="border-b-2 border-blue-400"
									exact={exact}
								>
									{label}
								</ActiveLink>
							</li>
						))}
					</ul>
				</nav>
				<button type="button">
					<ShoppingCart />
				</button>
			</div>
		</header>
	);
};
