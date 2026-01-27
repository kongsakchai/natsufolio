import { projects } from '$lib/data';

export const load = async ({ params }) => {
	return { title: params.tag, projects: projects(params.tag) };
};
