import { DigitalMarketing, SecureOnlineMarketig, SocialCommerce } from '$lib/assets/certificates';
import { HappyBambyDay, NamYejun, PlaveDebut100, Uranus2324 } from '$lib/assets/works';

import { AISkill, FigmaSkill, LRSkill, PSSkill } from '$lib/constants/skill';
import { certificateTypes, tags } from '$lib/constants/tags';

import { type Certificates, type Experience, type Project } from '$lib/types';

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

export const skills = [PSSkill, LRSkill, AISkill, FigmaSkill];

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
		name: 'PLAVE :<br/>YEJUN THAILAND',
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
		tags: [tags.GraphicDesign],
		subTags: [tags.SocialMediaDesign]
	},
	{
		id: '0002',
		name: 'PLAVE :<br/>YEJUN THAILAND',
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
		tags: [tags.GraphicDesign],
		subTags: [tags.SocialMediaDesign]
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
		name: 'PLAVE :<br/>YEJUN THAILAND',
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
		tags: [tags.GraphicDesign],
		subTags: [tags.SocialMediaDesign]
	},
	{
		id: '0005',
		name: 'URANUS 2324',
		date: '05-09-2023',
		endDate: '04-07-2024',
		category: 'Merchandise Design',
		image: Uranus2324,
		tags: [tags.GraphicDesign],
		subTags: [tags.ProductDesign],
		details:
			'โปรเจคหนัง  ยูเรนัส 2324 เป็นภาพยนตร์ไซไฟ–โรแมนติกที่เล่าเรื่องความรัก การเวลา และจักรวาล ผ่านมุมมองอารมณ์และความสัมพันธ์ของตัวละคร<br/><br/>The film project Uranus 2324 is a sci-fi romantic movie that explores love, time, and the universe through the emotional perspectives and relationships of its characters.'
		// moreImages: [UranusCredit]
	}
];

export const workTypes = [
	tags.GraphicDesign,
	tags.ProjectCoordinator,
	tags.CreativeProducer,
	tags.AssistantProducer,
	tags.Thesis
];

export const graphicTypes = [
	tags.ProductDesign,
	tags.SocialMediaDesign,
	tags.PhotoRetouch,
	tags.Illustration
];

export const certificates: Certificates[] = [
	{
		type: certificateTypes.BusinessAndMarketing,
		title: 'BUSINESS AND<br>MARKETING',
		list: [
			{
				name: 'Social Commerce for Business<br/>โดยกรมพัฒนาฝีมือแรงาน ร่วมกับ ETDA',
				img: SocialCommerce
			},
			{
				name: 'ก้าวสู่การเป็นนักการตลาดดิจิทัล<br/>โดยกรมพัฒนาฝีมือแรงาน ร่วมกับ ETDA',
				img: DigitalMarketing
			},
			{
				name: 'การสร้างความมั่นคงปลอดภัยให้ธุรกิจออนไลน์<br/>โดยกรมพัฒนาฝีมือแรงาน ร่วมกับ ETDA',
				img: SecureOnlineMarketig
			}
		]
	}
];
