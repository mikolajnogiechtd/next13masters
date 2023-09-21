import { executeGraphql } from "./GraphqlService";
import { PER_PAGE } from "@/utils/config";
import {
	CollectionGetByNameDocument,
	ColorsGetListDocument,
	ProductGetByCategorySlugDocument,
	ProductGetByIdDocument,
	ProductGetListDocument,
	ProductGetRelatedDocument,
	ProductsGetBySearchDocument,
	SizesGetListDocument,
} from "@/gql/graphql";

export const ProductsService = {
	getProducts: async (page: number) => {
		const graphqlResponse = await executeGraphql(ProductGetListDocument, {
			offset: (page - 1) * PER_PAGE,
		});
		return graphqlResponse.products;
	},
	getProductsBySearch: async (search: string) => {
		const graphqlResponse = await executeGraphql(ProductsGetBySearchDocument, {
			search,
		});
		return graphqlResponse.products;
	},
	getProductByCategory: async (category: string) => {
		const graphqlResponse = await executeGraphql(ProductGetByCategorySlugDocument, {
			slug: category,
		});
		return graphqlResponse.categories;
	},
	getCollection: async (name: string) => {
		const graphqlResponse = await executeGraphql(CollectionGetByNameDocument, { slug: name });
		return graphqlResponse.collections;
	},
	getProduct: async (id: string) => {
		const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });
		return graphqlResponse.product;
	},
	getRelatedProduct: async () => {
		const graphqlResponse = await executeGraphql(ProductGetRelatedDocument, {});
		return graphqlResponse.products;
	},
	getColors: async () => {
		const graphqlResponse = await executeGraphql(ColorsGetListDocument, {});
		return graphqlResponse.productColorVariants;
	},
	getSizes: async () => {
		const graphqlResponse = await executeGraphql(SizesGetListDocument, {});
		return graphqlResponse.productSizeVariants;
	},
};
