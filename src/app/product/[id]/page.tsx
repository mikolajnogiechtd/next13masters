import { type Metadata } from "next";
import { ProductsService } from "@/api/ProductsService";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney } from "@/utils/formatMoney";

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
		<div className="mx-auto flex max-w-2xl flex-col gap-2">
			<ProductCoverImage src={product.image} alt={product.title} />
			<div className="flex items-center justify-between">
				<h1 className="mt-2 text-center text-lg font-bold ">{product.title}</h1>
				<p className="font-bold">{formatMoney(product.price / 100)}</p>
			</div>
			<p className="text-gray-700">{product.description}</p>
		</div>
	);
}
