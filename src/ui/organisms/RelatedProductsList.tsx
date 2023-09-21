import React from "react";
import { ProductList } from "./ProductList";
import { ProductsService } from "@/api/ProductsService";

export const RelatedProductsList = async () => {
	const products = await ProductsService.getRelatedProduct();

	if (!products || products.length === 0) return null;

	return (
		<div className="mx-auto mt-12 flex max-w-2xl flex-col gap-2" data-testid="related-products">
			<p className="font-semibold">Related products:</p>
			<ProductList products={products} />
		</div>
	);
};
