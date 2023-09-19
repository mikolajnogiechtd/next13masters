"use client";

import React from "react";
import { type Route } from "next";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

interface ActiveLinkProps {
	href: Route;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName = "",
	exact = true,
	...rest
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const searchParams = useSearchParams().toString();
	const fullPath = pathname + (searchParams ? "?" + searchParams : "");

	const isActive = exact ? fullPath === href : fullPath.indexOf(href) !== -1;

	return (
		<Link
			href={href}
			prefetch={true}
			className={classNames(className, {
				[activeClassName]: isActive,
			})}
			{...rest}
		>
			{children}
		</Link>
	);
};
