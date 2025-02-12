import { projects } from '$lib/data';

import { convertToDate } from '$lib/utils/date';

import type { Project } from '$lib/types';

export interface CoverByYear {
	year: number;
	cover: {
		id: string;
		image: string;
		align: string;
	}[];
}

export const get = (id: string) => projects.find((p) => p.id === id);

export const getByYear = (year: number) => {
	return projects.filter((p) => convertToDate(p.date).year() === year);
};

export const getCoverByYear = () => {
	const list: Record<number, Project[]> = {};
	projects.forEach((project) => {
		const year = convertToDate(project.date).year();
		if (!list[year]) {
			list[year] = [];
		}
		list[year].push(project);
	});

	const years = Object.keys(list)
		.map(Number)
		.sort((a, b) => b - a);

	const covers: CoverByYear[] = years.map((year) => {
		const projects = list[year];
		const cover = projects.map((p) => ({
			id: p.id,
			image: p.cover ?? p.image,
			align: p.coverAlign ?? 'object-center'
		}));

		return { year, cover };
	});

	return covers;
};

export default { get, getByYear, getCoverByYear };
