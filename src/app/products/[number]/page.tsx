import { ProductsService } from "@/api/ProductsService";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { TOTAL_PAGES } from "@/utils/config";

export default async function ProductsPage({ params: { number } }: { params: { number: string } }) {
	const response = await ProductsService.getProducts(Number.parseInt(number));

	return (
		<div>
			<ProductList products={response} />
			<Pagination totalPages={TOTAL_PAGES} />
		</div>
	);
}
