import { HttpService } from "./HttpService";
import { type ProductItem } from "@/models/Product";

export const ProductsService = {
	getProducts: (page: number) =>
		HttpService.get<ProductItem[]>(`/products?take=20&offset=${((page - 1) * 20).toString()}`),
	getAllProducts: () => HttpService.get<ProductItem[]>(`/products?take=10000000`),
	getProduct: (id: string) => HttpService.get<ProductItem>(`/products/${id}`),
};
