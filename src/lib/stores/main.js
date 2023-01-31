import { readable } from 'svelte/store';

export const ismobileView = readable(true, (set) => {
	if (typeof window === 'undefined') return undefined;

	const query = window.matchMedia('(max-width: 45em)');
	set(query.matches);
	const update = (/** @type {{ matches: boolean; }} */ match) => {
		set(match.matches);
	};
	query.addListener(update);

	return () => {
		query.removeListener(update);
	};
});
