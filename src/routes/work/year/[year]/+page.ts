import { error } from '@sveltejs/kit';

import work from '$lib/data/work.js';

export const load = async ({ params }) => {
	const year = parseInt(params.year);
	const data = work.getByYear(year);

	if (data.length === 0) {
		error(404, 'Not found');
	}

	return { year, data };
};
