import project from '$lib/services/project';

export const load = async () => {
	const data = project.getCoverByYear();

	return { data };
};
