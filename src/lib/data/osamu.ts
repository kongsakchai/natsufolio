// import { HappyBambyDay, NamYejun, PlaveDebut100 } from '$lib/assets/works';
import * as coordinatorImg from '$lib/assets/works/project-coordinator';

import ImageDetail from '$lib/components/project/image-detail.svelte';
import List from '$lib/components/project/list.svelte';
import MultipleImage from '$lib/components/project/multiple-image.svelte';
import Paragraph from '$lib/components/project/paragraph.svelte';
import SubProject from '$lib/components/project/sub-project.svelte';
import Title from '$lib/components/project/title.svelte';

import { tags } from '$lib/constants/tags';

import { defineContent } from '$lib/utils';

export const lateNightXOsamu = {
	id: 'late-night-dance-club',
	name: 'LATE NIGHT DANCE CLUB <br/>X OSAMU GOODS BKK',
	date: '13-12-2025',
	category: 'Coordinator',
	image: coordinatorImg.LateNightXOsamuThumbnail,
	tags: [tags.ProjectCoordinator],
	contents: [
		defineContent(MultipleImage, {
			images: [
				{
					src: coordinatorImg.LateNightXOsamuPhoto1,
					class: 'col-span-3 preview'
				},
				coordinatorImg.LateNightXOsamuPhoto2,
				coordinatorImg.LateNightXOsamuPhoto3,
				coordinatorImg.LateNightXOsamuPhoto4
			],
			class: 'grid grid-cols-3 gap-1 w-2/3',
			classImg: ' preview',
			detail: `A cross-brand collaboration marking the first launch of OSAMU GOODS in Thailand. The project was initiated based on market, brand-fit, and consumer behavior analysis, which led to the proposal of a collaboration between a Thai fashion brand and a Japanese character brand. The initiative involved close collaboration with an international licensing partner, Sony Music, to ensure alignment with global brand standards`,
			detailClass: 'mt-8'
		}),
		defineContent(Title, {
			h: 6,
			content: 'Project Role & Responsibilities'
		}),
		defineContent(List, {
			items: [
				'Initiated a cross-brand collaboration project by analyzing market fit and consumer demand, resulting in approval from an international licensing partner (Sony Music).',
				'Gathered and clarified business requirements from clients and stakeholders, translating expectations into actionable workflows aligned across design, marketing, and production teams.',
				'Analyzed customer behavior and engagement data to recommend a two-drop release strategy, leading to sustained engagement and a sell-out shortly after launch.',
				'Translated business objectives into structured project flows and key milestones to ensure the launch was delivered on schedule.',
				'Coordinated with internal teams and external licensing partners to align requirements, approvals, and timelines, resulting in smooth project execution with no launch delays.',
				'Monitored launch performance metrics including reach and engagement, achieving exposure to tens of thousands of users during the launch period.'
			]
		}),
		defineContent(Title, {
			h: 6,
			content: 'Project Details'
		}),
		defineContent(Paragraph, {
			str: `
			LATE NIGHT DANCE CLUB x OSAMU GOODS BKK<br/>”DANCE SAVES THE DAY“ Collection<br/><br/>
			When two worlds come alive together, the playful, never-growing-up spirit of LATE NIGHT DANCE CLUB meets the warm, retro sweetness of OSAMU GOODS, brought to life by Master Osamu Harada.<br/><br/>
			Both worlds hold onto the same simple thought“ A little joy, a little play, and a little dance can makeany day feel magical!"<br/><br/>
			<span class="text-yellow-200">Exclusive Pop-up</span> at @carnivalbkk  CentralWorld (3rd Floor)<br/><br/>
			“DANCE SAVES THE DAY” Collection<br/>
			Drop 1 - 13/12/25<br/>
			Drop 2 - 16/12/25
			`
		})
	]
};

export const codecXOsamu = {
	id: 'codec-creation',
	name: 'CODEC CREATION X<br/> OSAMU GOODS BKK',
	date: 'xx-xx-2026',
	category: 'Coordinator',
	image: coordinatorImg.CodecCreatorThumbnail,
	imageStyle: 'background-size: 200%;background-position: center 80%;',
	tags: [tags.ProjectCoordinator],
	contents: [
		defineContent(ImageDetail, {
			img: coordinatorImg.CodecCreatorThumbnail,
			classImg: 'w-2/3 mx-auto preview',
			detailClass: 'mt-6',
			detail: `Codec Creation has partnered with GM Generates to develop and expand products under the OSAMU GOODS brand for the Thai market, with an official launch and product release planned for early 2026.
				<br/><br/>
				The objective of this project is to build brand awareness for OSAMU GOODS in Thailand, while simultaneously developing products that effectively align with the preferences and needs of Thai consumers.`
		}),
		defineContent(Title, {
			h: 6,
			content: 'Project Role & Responsibilities'
		}),
		defineContent(List, {
			items: [
				'Coordinated with cross-functional internal teams and external licensing stakeholders to gather, validate, and align business requirements, approvals, and delivery timelines in preparation for the planned product launch.',
				'Tracked and analyzed pre-launch performance indicators (e.g., reach and engagement) to support data-driven decision-making and inform launch strategy.'
			]
		})
	]
};

export const osamuGoodBkk = {
	id: 'osamu-goods-bkk',
	name: 'OSAMU GOODS BKK',
	subNameCard: 'SONY CREATIVE PRODUCTS',
	date: '01-01-2024',
	category: 'Coordinator',
	image: coordinatorImg.OsamuGoodBBKThumbnail,
	tags: [tags.ProjectCoordinator],
	contents: [
		defineContent(ImageDetail, {
			img: coordinatorImg.OsamuGoodBBKCover,
			classImg: 'w-2/3 mx-auto preview',
			detailClass: 'mt-6',
			detail: `Osamu Goods is a character brand under Sony Music.
GM Generates holds the official licensing rights for Osamu Goods in Thailand.
<br/><br/>
I was assigned to serve as the key point of coordination between Sony Creative Products team and local clients, ensuring clear communication, alignment of requirements, and smooth collaboration throughout the licensing and product development processes.
`
		}),
		defineContent(Title, {
			h: 6,
			content: 'Responsibilities'
		}),
		defineContent(List, {
			items: [
				'Analyzed business opportunities and feasibility for brand collaboration projects, and prepared strategic proposals for executive review and decision-making.',
				'Acted as the primary point of contact for communicating and providing project updates to Sony Creative Products Team, ensuring alignment and up-to-date information throughout the project lifecycle.',
				'Ensured product development complied with intellectual property guidelines and design standards defined by the licensor, covering all stages from design, pre-production, and mass production to market launch.',
				'Provided analytical consultation and recommendations to clients on design and project execution, including issue analysis and proposing effective solutions to ensure projects achieved defined objectives.'
			]
		}),
		defineContent(SubProject, {
			title: 'Project',
			projects: [
				{
					...lateNightXOsamu,
					image: coordinatorImg.LateNightXOsamuPhoto1,
					imageStyle: 'object-fit: cover;',
					details: 'LATE NIGHT DANCE CLUB × OSAMU GOODS BKK<br/>”DANCE SAVES THE DAY“ Collection'
				},
				{
					...codecXOsamu,
					imageStyle: 'object-fit: cover;scale:150%; object-position: center 60%;',
					details:
						'Codec Creation has partnered with GM Generates to develop and expand products under the OSAMU GOODS brand for the Thai market.'
				}
			]
		})
	]
};
