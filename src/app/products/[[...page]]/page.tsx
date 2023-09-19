import { ProductsService } from "@/api/ProductsService";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { range } from "@/utils/range";

const TOTAL_PAGES = 10;

export async function generateStaticParams() {
	return range(TOTAL_PAGES).map((page) => ({
		params: {
			page: page + 1,
		},
	}));
}

export default async function Home({ params: { page = "1" } }: { params: { page: string } }) {
	const response = await ProductsService.getProducts(Number.parseInt(page));

	return (
		<main>
			<ProductList products={response.data} />
			<Pagination totalPages={TOTAL_PAGES} />
		</main>
	);
}
