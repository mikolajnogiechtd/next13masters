"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
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
	const searchParams = useSearchParams().toString();
	const fullPath = pathname + (searchParams ? "?" + searchParams : "");

	// eslint-disable-next-line @typescript-eslint/no-base-to-string
	const isActive = exact ? fullPath === href : fullPath.indexOf(href.toString()) !== -1;

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
