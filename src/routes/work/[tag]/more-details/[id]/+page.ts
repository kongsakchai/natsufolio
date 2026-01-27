import { error } from '@sveltejs/kit';

import { projects } from '$lib/data';

export const load = ({ params }) => {
	const project = projects(params.tag).find((pr) => pr.id === params.id);
	if (!project) {
		return error(404);
	}

	return { project: project };
};
