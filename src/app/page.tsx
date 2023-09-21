import { Suspense } from "react";
import { RelatedProductsList } from "@/ui/organisms/RelatedProductsList";

export default function HomePage() {
	return (
		<Suspense>
			<RelatedProductsList />
		</Suspense>
	);
}
