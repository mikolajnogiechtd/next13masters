import { type ProductItem } from "@/models/Product";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductItem[] = [
	{
		id: "1",
		name: "Koszulka",
		category: "Odzież",
		price: 5999,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Koszulka",
		},
	},
	{
		id: "2",
		name: "Kubek",
		category: "Akcesoria",
		price: 1999,
		coverImage: {
			src: "/product_2.jpg",
			alt: "Kubek",
		},
	},
	{
		id: "3",
		name: "Koszulka z rękawem",
		category: "Odzież",
		price: 8999,
		coverImage: {
			src: "/product_3.png",
			alt: "Koszulka z rękawem",
		},
	},
	{
		id: "4",
		name: "Czapka",
		category: "Odzież",
		price: 3999,
		coverImage: {
			src: "/product_4.jpeg",
			alt: "Czapka",
		},
	},
];

export default function Home() {
	return (
		<main>
			<ProductList products={products} />
		</main>
	);
}
