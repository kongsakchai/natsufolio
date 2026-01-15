import { HappyBambyDay, NamYejun, PlaveDebut100 } from '$lib/assets/works';
import * as uranusImg from '$lib/assets/works/uranus';

import ImageDetail from '$lib/components/project/image-detail.svelte';
import SubProject from '$lib/components/project/sub-project.svelte';

import { tags } from '$lib/constants/tags';

import { defineContent } from '$lib/utils';

import type { Menu, Project, Tag } from '$lib/types';

import { uranus0005 } from './sub/uranus';

export const projects: Project[] = [
	{
		id: '0001',
		name: '<div class="text-wrap">PLAVE : <span class="text-nowrap">YEJUN THAILAND</span></div>',
		date: '18-01-2023',
		details: '100th Day Debut Anniversary Celebration',
		category: 'Poster Design',
		image: PlaveDebut100,
		hastags: ['플레이브_100일_800하자', 'PLAVE_WITH_100DAYS'],
		// skills: [PSSkill, AISkill],
		// link: {
		// 	...XPlatform,
		// 	url: 'https://x.com/ONLYYEJUN_TH/status/1670438719860662272'
		// },
		tags: [tags.GraphicDesign, tags.SocialMediaDesign]
	},
	{
		id: '0002',
		name: '<div class="text-wrap">PLAVE : <span class="text-nowrap">YEJUN THAILAND</span></div>',
		date: '18-01-2023',
		details: 'Num Yejun : 100th Day Debut Anniversary Celebration',
		category: 'Poster Design',
		image: NamYejun,
		hastags: ['플레이브_100일_800하자', 'PLAVE_WITH_100DAYS'],
		// skills: [PSSkill, AISkill],
		// link: {
		// 	...XPlatform,
		// 	url: 'https://x.com/ONLYYEJUN_TH/status/1670446272648732672'
		// },
		tags: [tags.GraphicDesign, tags.SocialMediaDesign]
	},
	// {
	// 	id: '0003',
	// 	name: 'TWIN FLOWER',
	// 	date: '30-05-2023',
	// 	coverAlign: 'object-top',
	// 	details:
	// 		'"Twin Flower" is a character design inspired by flowers, using a combination of pink and blue paired with yellow to create an intriguing and captivating color scheme. This design was created to teach how to create flower petals using Adobe Illustrator.',
	// 	image: TwinFlower,
	// 	cover: TwinFlowerCover,
	// 	skills: [AISkill],
	// 	moreImages: [TwinFlower3Styles, TwinFlowerStepByStep],
	// 	remark: 'Let’s make your own flower.',
	// 	link: {
	// 		...IgPlatform,
	// 		url: 'https://www.instagram.com/p/Cs35K9tpdk_/?img_index=1&igsh=MTJubTd3Yzd0cHNrYg=='
	// 	},
	// 	moreLinks: [
	// 		{
	// 			...IgPlatform,
	// 			url: 'https://www.instagram.com/p/Cs3McLkJbcl/?igsh=MW0zdWgyZGZrazB6aQ=='
	// 		},
	// 		{
	// 			...TiktokPlatform,
	// 			url: 'https://vt.tiktok.com/ZSM86Cyo3/'
	// 		}
	// 	]
	// },
	{
		id: '0004',
		name: '<div class="text-wrap">PLAVE : <span class="text-nowrap">YEJUN THAILAND</span></div>',
		date: '14-07-2023',
		category: 'Poster Design',
		image: HappyBambyDay,
		// coverAlign: 'object-top',
		hastags: [
			'핑크빛여름_밤비야_생일축하해',
			'HappyBongbyDay',
			'Happy_Bamby_Day',
			'밤비로_가득한_반짝이는_여름'
		],
		// skills: [PSSkill, AISkill],
		// link: {
		// 	...XPlatform,
		// 	url: 'https://x.com/ONLYYEJUN_TH/status/1679884413373661187'
		// },
		tags: [tags.GraphicDesign, tags.SocialMediaDesign]
	},
	{
		id: '0005',
		name: 'URANUS 2324',
		date: '05-09-2023',
		endDate: '04-07-2024',
		category: 'Merchandise Design',
		image: uranusImg.UranusPosterThumbnail,
		tags: [tags.GraphicDesign, tags.ProductDesign],
		contents: [
			defineContent(ImageDetail, {
				class: 'grid grid-cols-2 gap-4',
				img: uranusImg.UranusPoster,
				classImg: 'preview',
				detail:
					'โปรเจคหนัง  ยูเรนัส 2324 เป็นภาพยนตร์ไซไฟ–โรแมนติกที่เล่าเรื่องความรัก การเวลา และจักรวาล ผ่านมุมมองอารมณ์และความสัมพันธ์ของตัวละคร<br/><br/>The film project Uranus 2324 is a sci-fi romantic movie that explores love, time, and the universe through the emotional perspectives and relationships of its characters.'
			}),
			defineContent(ImageDetail, {
				class: 'flex gap-4',
				classImg: 'w-[150px]',
				img: uranusImg.NetflixLogo,
				detailClass: 'text-center ',
				detail:
					'The end credits of the movie Uranus 2324.<br/><span class="text-[#FFCC22]">I was assigned the role of creative designer on this project.</span>'
			}),
			defineContent(ImageDetail, {
				class: 'flex gap-4',
				img: uranusImg.UranusEndCredit
			}),
			defineContent(SubProject, {
				class: 'mt-6',
				title: 'Project Design Contributions',
				projects: uranus0005
			})
		]
	}
];

export const workMenus: Menu[] = [
	{
		name: tags.GraphicDesign,
		submenu: [
			{
				name: tags.ProductDesign
			},
			{
				name: tags.SocialMediaDesign
			},
			{
				name: tags.PhotoRetouch
			},
			{
				name: tags.Illustration
			}
		]
	},
	{
		name: tags.ProjectCoordinator
	},
	{
		name: tags.CreativeProducer
	},
	{
		name: tags.AssistantProducer
	},
	{
		name: tags.Thesis
	}
];

export const workCountByTags: Record<Tag, number> = projects.reduce(
	(prev, cur) => {
		cur.tags?.forEach((t) => {
			prev[t] ||= 0;
			prev[t]++;
		});
		return prev;
	},
	{} as Record<Tag, number>
);
