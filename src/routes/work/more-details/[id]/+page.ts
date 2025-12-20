import { error } from '@sveltejs/kit';

import { projects } from '$lib/data';

export const load = ({ params }) => {
	const project = projects.find((f) => f.id == params.id);
	if (!project) {
		return error(404);
	}

	return { project: project };
};
