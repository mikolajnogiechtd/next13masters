import { ProductsService } from "@/api/ProductsService";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductSearchPage({
	searchParams: { query },
}: {
	searchParams: {
		query: string;
	};
}) {
	const products = await ProductsService.getProductsBySearch(query);

	return (
		<div>
			{products.length > 0 ? (
				<div className="flex flex-col gap-2">
					<h1 className="font-bold">Search results for {query}:</h1>
					<ProductList products={products} />
				</div>
			) : (
				<p className="text-center text-gray-600">No results for this search!</p>
			)}
		</div>
	);
}
