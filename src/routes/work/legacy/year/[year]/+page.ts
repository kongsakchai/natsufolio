import { error } from '@sveltejs/kit';

import project from '$lib/services/project.js';

export const load = async ({ params }) => {
	const year = parseInt(params.year);
	const data = project.getByYear(year);

	if (data.length === 0) {
		error(404, 'Not found');
	}

	return { year, data };
};
