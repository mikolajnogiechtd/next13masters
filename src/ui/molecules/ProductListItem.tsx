import { ActiveLink } from "../atoms/ActiveLink";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListItemProps {
	product: ProductListItemFragment;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<ActiveLink href={`/product/${product.id}`}>
				<article className="flex flex-col gap-2">
					<ProductCoverImage src={product.images[0]?.url || ""} alt={product.name} />
					<ProductListItemDescription
						name={product.name}
						category={product.categories[0]?.name || ""}
						price={product.price}
					/>
				</article>
			</ActiveLink>
		</li>
	);
};
