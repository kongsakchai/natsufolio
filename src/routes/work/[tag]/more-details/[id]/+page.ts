import { error } from '@sveltejs/kit';

import { projects } from '$lib/data';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = projects(params.tag).find((pr) => pr.id === params.id);
	if (!project) {
		return error(404);
	}

	return { project: project };
};
