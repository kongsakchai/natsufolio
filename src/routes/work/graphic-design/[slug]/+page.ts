import type { Tags } from '$lib/types/index.js';

import { projects } from '$lib/data';

export const load = async ({ params }) => {
	const filter = projects.filter((project) => project.subTags?.includes(params.slug as Tags));

	return { title: params.slug, projects: filter };
};
