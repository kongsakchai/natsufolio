import { projects } from '$lib/data';

export const load = async ({ params }) => {
	const filter = projects.filter((project) => project.tags?.includes(params.tag));

	return { title: params.tag, projects: filter };
};
