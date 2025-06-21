import { error } from '@sveltejs/kit';

import project from '$lib/services/project.js';

export const load = async ({ params }) => {
	const data = project.get(params.id);

	if (!data) {
		error(404, 'Not found');
	}

	return { data };
};
