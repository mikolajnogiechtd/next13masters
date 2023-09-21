const capitalizeAllFirst = (string: string) => {
	return string
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
};

export const unslug = (string: string) => {
	return capitalizeAllFirst(string.replace(/-/g, " "));
};
