import { type Metadata } from "next";
import { ProductsService } from "@/api/ProductsService";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";

export async function generateMetadata({
	params: { id },
}: {
	params: { id: string };
}): Promise<Metadata> {
	const response = await ProductsService.getProduct(id);
	const product = response.data;

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({
	params: { id },
}: {
	params: {
		id: string;
	};
}) {
	const response = await ProductsService.getProduct(id);
	const product = response.data;

	return (
		<main className="mx-auto max-w-2xl">
			<ProductCoverImage src={product.image} alt={product.title} />
			<h1 className="mt-2 text-center text-lg font-bold">{product.title}</h1>
			<p>{product.description}</p>
		</main>
	);
}
