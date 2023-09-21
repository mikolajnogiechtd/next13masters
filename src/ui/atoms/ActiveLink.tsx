"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link, { type LinkProps } from "next/link";
import classNames from "classnames";

type ActiveLinkProps<Href> = {
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
} & LinkProps<Href>;

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName = "",
	exact = true,
	...rest
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: // eslint-disable-next-line @typescript-eslint/no-base-to-string
		  pathname.split("/")[1]?.indexOf(href.toString().split("/")[1] || "") !== -1;

	return (
		<Link
			href={href}
			prefetch={true}
			className={classNames(className, {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? "page" : undefined}
			{...rest}
		>
			{children}
		</Link>
	);
};
