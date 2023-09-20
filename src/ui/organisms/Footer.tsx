import React from "react";

export const Footer = () => {
	return (
		<footer className="mt-2 w-full border-t-[1px] border-t-gray-300 py-2 text-center">
			<span className="tracking-wider text-gray-600"> &copy; {new Date().getFullYear()}</span>
		</footer>
	);
};
