import type { Tag } from '$lib/types/index.js';

import { projects } from '$lib/data';

export const load = async ({ params }) => {
	const filter = projects.filter((project) => project.subTags?.includes(params.slug as Tag));

	return { title: params.slug, projects: filter };
};
