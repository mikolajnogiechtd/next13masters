import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { ProductsService } from "@/api/ProductsService";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { TOTAL_PAGES } from "@/utils/config";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export async function generateMetadata({
	params: { category },
}: {
	params: { category: string; number: string };
}): Promise<Metadata> {
	return {
		title: capitalizeFirstLetter(category),
	};
}

export default async function ProductsCategoryPage({
	params: { category },
}: {
	params: { category: string; number: string };
}) {
	const response = await ProductsService.getProductByCategory(category);

	if (response.length === 0 || !response[0]?.products) {
		throw notFound();
	}

	return (
		<div>
			<h1 className="my-2 text-4xl font-bold uppercase">{capitalizeFirstLetter(category)}</h1>
			<ProductList products={response[0]?.products} />
			<Pagination totalPages={TOTAL_PAGES} />
		</div>
	);
}
