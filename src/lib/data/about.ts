import {
	DigitalMarketing,
	JiraScrumProject,
	SecureOnlineMarketig,
	SocialCommerce
} from '$lib/assets/certificates';

import { AISkill, FigmaSkill, LRSkill, PSSkill } from '$lib/constants/skill';
import { certificateTypes } from '$lib/constants/tags';

import type { Certificates, Experience } from '$lib/types';

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
	},
	{
		type: certificateTypes.AgileAndScrum,
		title: 'AGILE/SCRUM',
		list: [
			{
				name: 'How to create Jira SCRUM project - Coursera',
				img: JiraScrumProject
			}
		]
	}
];

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
