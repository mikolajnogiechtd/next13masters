import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { ProductsService } from "@/api/ProductsService";
import { ProductList } from "@/ui/organisms/ProductList";
import { unslug } from "@/utils/unslug";

export async function generateMetadata({
	params: { collection },
}: {
	params: { collection: string };
}): Promise<Metadata> {
	return {
		title: unslug(collection),
	};
}

export default async function ProductsCategoryPage({
	params: { collection },
}: {
	params: { collection: string };
}) {
	const response = await ProductsService.getCollection(collection);

	if (response.length === 0 || !response[0]?.products) {
		throw notFound();
	}

	return (
		<div>
			<h1 className="my-2 text-4xl font-bold uppercase">{unslug(collection)}</h1>
			<ProductList products={response[0]?.products} />
		</div>
	);
}
