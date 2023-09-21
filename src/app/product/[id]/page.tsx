import { type Metadata } from "next";
import { Suspense } from "react";
import { ProductsService } from "@/api/ProductsService";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney } from "@/utils/formatMoney";
import { RelatedProductsList } from "@/ui/organisms/RelatedProductsList";

export async function generateMetadata({
	params: { id },
}: {
	params: { id: string };
}): Promise<Metadata> {
	const product = await ProductsService.getProduct(id);

	return {
		title: product?.name ?? "Product",
		description: product?.description,
	};
}

export default async function ProductPage({
	params: { id },
}: {
	params: {
		id: string;
	};
}) {
	const product = await ProductsService.getProduct(id);
	const colors = await ProductsService.getColors();
	const sizes = await ProductsService.getSizes();

	return (
		<div className="mx-auto flex max-w-2xl flex-col gap-2">
			{product?.images[0] && (
				<ProductCoverImage src={product?.images[0]?.url} alt={product?.name ?? ""} />
			)}
			<div className="flex items-center justify-between">
				<h1 className="mt-2 text-center text-lg font-bold ">{product?.name}</h1>
				{product?.price && <p className="font-bold">{formatMoney(product?.price / 100)}</p>}
			</div>
			<p className="text-gray-700">{`Colors: ${colors.map(({ color }) => color).join(", ")}`}</p>
			<p className="text-gray-700">{`Sizes: ${sizes.map(({ size }) => size).join(", ")}`}</p>
			<p className="text-gray-700">{product?.description}</p>
			<Suspense>
				<RelatedProductsList />
			</Suspense>
		</div>
	);
}
