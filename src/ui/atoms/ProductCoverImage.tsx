/* eslint-disable @next/next/no-img-element */
import { type ProductItem } from "@/models/Product";

interface ProductCoverImageProps {
	src: ProductItem["coverImage"]["src"];
	alt: ProductItem["coverImage"]["alt"];
}

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border-8 border-slate-200 bg-white">
			<img
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 hover:scale-125"
			/>
		</div>
	);
};
