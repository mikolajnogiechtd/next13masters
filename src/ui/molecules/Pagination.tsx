import React from "react";
import { ActiveLink } from "../atoms/ActiveLink";
import { range } from "@/utils/range";

interface PaginationProps {
	totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
	return (
		<nav
			className="mt-5 flex items-center justify-center border-t border-gray-200 px-4 pb-3 sm:px-0"
			aria-label="pagination"
		>
			<div className="hidden md:-mt-px md:flex">
				{range(totalPages).map((page) => (
					<ActiveLink
						key={"page-" + page}
						href={`/products/${page + 1}` as const}
						className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
						activeClassName="text-indigo-600 border-indigo-500 hover:border-indigo-500"
						role="link"
					>
						{page + 1}
					</ActiveLink>
				))}
			</div>
		</nav>
	);
};
