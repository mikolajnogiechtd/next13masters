/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => any;

export function useDebounce<Func extends SomeFunction>(func: Func, delay = 1000) {
	const timer = useRef<Timer>();

	useEffect(
		() => () => {
			if (!timer.current) return;
			clearTimeout(timer.current);
		},
		[],
	);

	const debouncedFunction = ((...args) => {
		const newTimer = setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			func(...args);
		}, delay);
		clearTimeout(timer.current);
		timer.current = newTimer;
	}) as Func;

	return debouncedFunction;
}
