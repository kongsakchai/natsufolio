import { projects, resolveName } from '$lib/data';

export const load = async ({ params }) => {
	return { title: resolveName(params.tag), projects: projects(params.tag) };
};
