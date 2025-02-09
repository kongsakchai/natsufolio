import work from '$lib/data/work';

export const load = async () => {
	const data = work.getProjectCoverOfYear();

	return { data };
};
