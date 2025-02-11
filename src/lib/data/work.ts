import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import TwinFlowerCover from '$lib/assets/works/2-flower-cover.jpg';
import HappyBambyDay from '$lib/assets/works/happy-bamby-day.png';
import NamYejun from '$lib/assets/works/nam-yejun.png';
import PlaveDebut100 from '$lib/assets/works/plave-debut-100.png';

import type { Project } from '$lib/types';

import type { ProjectYear, ProjectYearDetail } from './model';

dayjs.extend(customParseFormat);

const data: Project[] = [
	{
		id: '0001',
		name: 'PLAVE : YEJUN THAILAND',
		date: '18-01-2023',
		details: '100th Day Debut Anniversary Celebration',
		image: PlaveDebut100,
		hastags: ['플레이브_100일_800하자', 'PLAVE_WITH_100DAYS']
	},
	{
		id: '0002',
		name: 'PLAVE : YEJUN THAILAND',
		date: '18-01-2023',
		details: 'Num Yejun : 100th Day Debut Anniversary Celebration',
		image: NamYejun,
		hastags: ['플레이브_100일_800하자', 'PLAVE_WITH_100DAYS']
	},
	{
		id: '0003',
		name: 'TWIN FLOWER',
		date: '30-05-2023',
		coverAlign: 'object-top',
		details:
			'"Twin Flower" is a character design inspired by flowers, using a combination of pink and blue paired with yellow to create an intriguing and captivating color scheme. This design was created to teach how to create flower petals using Adobe Illustrator.',
		image: '',
		cover: TwinFlowerCover
	},
	{
		id: '0004',
		name: 'PLAVE : YEJUN THAILAND',
		date: '14-07-2023',
		image: HappyBambyDay,
		coverAlign: 'object-top',
		hastags: [
			'핑크빛여름_밤비야_생일축하해',
			'HappyBongbyDay',
			'Happy_Bamby_Day',
			'밤비로_가득한_반짝이는_여름'
		]
	}
];

const get = (id: string): Project | undefined => data.find((project) => project.id === id);

const getByYear = (year: number): Project[] => {
	return data.filter((project) => dayjs(project.date, 'DD-MM-YYYY').year() === year);
};

const getProjectYears = (): ProjectYear[] => {
	const projectCoverOfYear = data.reduce(
		(acc, project) => {
			const year = dayjs(project.date, 'DD-MM-YYYY').year();
			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push({
				id: project.id,
				image: project.cover ?? project.image,
				coverAlign: project.coverAlign ?? 'object-center'
			});
			return acc;
		},
		{} as Record<number, ProjectYearDetail[]>
	);

	const convert = ([year, projects]: [string, ProjectYearDetail[]]): ProjectYear => {
		return { year: Number(year), projects };
	};

	const sorted = (a: ProjectYear, b: ProjectYear) => b.year - a.year;

	return Object.entries(projectCoverOfYear).map(convert).sort(sorted);
};

export default { get, getByYear, getProjectYears };
