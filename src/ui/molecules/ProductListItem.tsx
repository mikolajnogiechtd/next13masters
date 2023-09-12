import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductItem } from "@/models/Product";

interface ProductListItemProps {
	product: ProductItem;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article className="flex flex-col gap-2">
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			</article>
		</li>
	);
};
