import React from "react";
import { range } from "@/utils/range";
import { TOTAL_PAGES } from "@/utils/config";

export async function generateStaticParams() {
	return range(TOTAL_PAGES).map((page) => ({
		number: (page + 1).toString(),
	}));
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
