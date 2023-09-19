import { ActiveLink } from "../atoms/ActiveLink";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductItem } from "@/models/Product";

interface ProductListItemProps {
	product: ProductItem;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<ActiveLink href={`/product/${product.id}`}>
				<article className="flex flex-col gap-2">
					<ProductCoverImage src={product.image} alt={product.title} />
					<ProductListItemDescription
						name={product.title}
						category={product.category}
						price={product.price}
					/>
				</article>
			</ActiveLink>
		</li>
	);
};
