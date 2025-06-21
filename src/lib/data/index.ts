import {
	HappyBambyDay,
	NamYejun,
	PlaveDebut100,
	TwinFlower,
	TwinFlower3Styles,
	TwinFlowerCover,
	TwinFlowerStepByStep
} from '$lib/assets/works';

import { IG_PLATFORMS, TIKTOK_PLATFORM, X_Platforms } from '$lib/constants/platforms';
import { AI_SKILL, FIGMA_SKILL, LR_SKILL, PS_SKILL } from '$lib/constants/skill';

import type { Experience, Project } from '$lib/types';

export const creativeFields = [
	'ILLUSTRATION',
	'LOGO DESIGN',
	'CHARACTER DESIGN',
	'UI DESIGN',
	'PACKAGE DESIGN',
	'BRANDING'
];

export const softSkills = [
	'COMMUNICATION',
	'ORGANIZATION',
	'CHARACTER DESIGN',
	'TIME MANAGEMENT',
	'TEAM WORK',
	'FLEXIBILITY',
	'CREATIVITY'
];

export const skills = [PS_SKILL, LR_SKILL, AI_SKILL, FIGMA_SKILL];

export const experiences: Experience[] = [
	{
		year: 2019,
		title: 'TUTV [THAMMASAT CHANNEL]',
		details: '# Graphic Design'
	},
	{
		year: 2022,
		title: 'DIN Animation Studio',
		details: 'intern # Comic Colorist'
	},
	{
		year: 2023,
		title: 'GM Generates Co.,Ltd',
		details: '# Creative & Graphic Design'
	}
];

export const projects: Project[] = [
	{
		id: '0001',
		name: 'PLAVE : YEJUN THAILAND',
		date: '18-01-2023',
		details: '100th Day Debut Anniversary Celebration',
		image: PlaveDebut100,
		hastags: ['플레이브_100일_800하자', 'PLAVE_WITH_100DAYS'],
		skills: [PS_SKILL, AI_SKILL],
		link: {
			...X_Platforms,
			url: 'https://x.com/ONLYYEJUN_TH/status/1670438719860662272'
		}
	},
	{
		id: '0002',
		name: 'PLAVE : YEJUN THAILAND',
		date: '18-01-2023',
		details: 'Num Yejun : 100th Day Debut Anniversary Celebration',
		image: NamYejun,
		hastags: ['플레이브_100일_800하자', 'PLAVE_WITH_100DAYS'],
		skills: [PS_SKILL, AI_SKILL],
		link: {
			...X_Platforms,
			url: 'https://x.com/ONLYYEJUN_TH/status/1670446272648732672'
		}
	},
	{
		id: '0003',
		name: 'TWIN FLOWER',
		date: '30-05-2023',
		coverAlign: 'object-top',
		details:
			'"Twin Flower" is a character design inspired by flowers, using a combination of pink and blue paired with yellow to create an intriguing and captivating color scheme. This design was created to teach how to create flower petals using Adobe Illustrator.',
		image: TwinFlower,
		cover: TwinFlowerCover,
		skills: [AI_SKILL],
		moreImages: [TwinFlower3Styles, TwinFlowerStepByStep],
		remark: 'Let’s make your own flower.',
		link: {
			...IG_PLATFORMS,
			url: 'https://www.instagram.com/p/Cs35K9tpdk_/?img_index=1&igsh=MTJubTd3Yzd0cHNrYg=='
		},
		moreLinks: [
			{
				...IG_PLATFORMS,
				url: 'https://www.instagram.com/p/Cs3McLkJbcl/?igsh=MW0zdWgyZGZrazB6aQ=='
			},
			{
				...TIKTOK_PLATFORM,
				url: 'https://vt.tiktok.com/ZSM86Cyo3/'
			}
		]
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
		],
		skills: [PS_SKILL, AI_SKILL],
		link: {
			...X_Platforms,
			url: 'https://x.com/ONLYYEJUN_TH/status/1679884413373661187'
		}
	}
];

export const workType = ['Graphic design', 'Illustration', 'Product design', '3D', 'ux/ui'];
