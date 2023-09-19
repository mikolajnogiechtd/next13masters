import { HttpService } from "./HttpService";
import { type ProductItem } from "@/models/Product";

export const ProductsService = {
	getProducts: (page: number) =>
		HttpService.get<ProductItem[]>(`/products?take=20&offset=${((page - 1) * 20).toString()}`),
	getProduct: (id: string) => HttpService.get<ProductItem>(`/products/${id}`),
};
