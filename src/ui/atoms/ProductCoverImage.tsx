import NextImage from "next/image";

interface ProductCoverImageProps {
	src: string;
	alt: string;
}

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border-8 border-slate-200 bg-white">
			<NextImage
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 hover:scale-125"
			/>
		</div>
	);
};
