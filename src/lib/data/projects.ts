// import { HappyBambyDay, NamYejun, PlaveDebut100 } from '$lib/assets/works';
import { InstagramIcon, TiktokIcon, XIcon } from '$lib/assets/icons';
import * as illusImg from '$lib/assets/works/illustration';
import * as coordinatorImg from '$lib/assets/works/project-coordinator';
import * as socialImg from '$lib/assets/works/social-media';

import ImageDetail from '$lib/components/project/image-detail.svelte';
import MultipleImage from '$lib/components/project/multiple-image.svelte';
import Paragraph from '$lib/components/project/paragraph.svelte';
import ProgramUse from '$lib/components/project/program-use.svelte';

import { AISkill, PSSkill } from '$lib/constants/skill';
import { tags } from '$lib/constants/tags';

import { defineContent } from '$lib/utils';

import type { Menu, Project, Tag } from '$lib/types';

import { codecXOsamu, lateNightXOsamu, osamuGoodBkk } from './osamu';
import { uranusProject } from './uranus';

const productDesignProjects: Project[] = [uranusProject];

const socialMediaDesignProjects: Project[] = [
	{
		id: 'plave-yejun-001',
		name: 'PLAVE : YEJUN THAILAND',
		date: '18-06-2023',
		category: 'Poster Design',
		image: socialImg.PlaveYejunThumbnail,
		imageStyle: 'background-size: 220%;background-position:top center;',
		tags: [tags.GraphicDesign, tags.SocialMediaDesign],
		contents: [
			defineContent(ImageDetail, {
				img: socialImg.PlaveYejun,
				classImg: 'w-full mx-auto preview',
				detailClass: 'mt-6',
				detail: `<p class="flex w-full">100th Day Debut Anniversary Celebration <img src="${XIcon}" alt="x icon" class="w-5 h-5 inline ml-auto"/></p>
					<br/>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/%ED%94%8C%EB%A0%88%EC%9D%B4%EB%B8%8C_100%EC%9D%BC_800%ED%95%98%EC%9E%90?src=hashtag_click">#플레이브_100일_800하자</a>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/PLAVE_WITH_100DAYS?src=hashtag_click">#PLAVE_WITH_100DAYS</a>`
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	},
	{
		id: 'plave-yejun-002',
		name: 'PLAVE : YEJUN THAILAND',
		date: '18-06-2023',
		category: 'Poster Design',
		image: socialImg.PlaveYejun100Thumbnail,
		tags: [tags.GraphicDesign, tags.SocialMediaDesign],
		contents: [
			defineContent(ImageDetail, {
				img: socialImg.PlaveYejun100,
				classImg: 'w-full mx-auto preview',
				detailClass: 'mt-6',
				detail: `<p class="flex w-full">100th Day Debut Anniversary Celebration <img src="${XIcon}" alt="x icon" class="w-5 h-5 inline ml-auto"/></p>
					<br/>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/%ED%94%8C%EB%A0%88%EC%9D%B4%EB%B8%8C_100%EC%9D%BC_800%ED%95%98%EC%9E%90?src=hashtag_click">#플레이브_100일_800하자</a>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/PLAVE_WITH_100DAYS?src=hashtag_click">#PLAVE_WITH_100DAYS</a>`
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	},
	{
		id: 'plave-yejun-003',
		name: 'PLAVE : YEJUN THAILAND',
		date: '14-07-2023',
		category: 'Poster Design',
		image: socialImg.BambyThumbnail,
		tags: [tags.GraphicDesign, tags.SocialMediaDesign],
		contents: [
			defineContent(ImageDetail, {
				img: socialImg.Bamby,
				detailClass: 'mt-6',
				classImg: 'w-full mx-auto preview',
				detail: `<p class="flex w-full">100th Day Debut Anniversary Celebration <img src="${XIcon}" alt="x icon" class="w-5 h-5 inline ml-auto"/></p>
					<br/>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/%ED%95%91%ED%81%AC%EB%B9%9B%EC%97%AC%EB%A6%84_%EB%B0%A4%EB%B9%84%EC%95%BC_%EC%83%9D%EC%9D%BC%EC%B6%95%ED%95%98%ED%95%B4?src=hashtag_click">#핑크빛여름_밤비야_생일축하해</a>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/HappyBongbyDay?src=hashtag_click">#HappyBongbyDay</a>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/Happy_Bamby_Day?src=hashtag_click">#Happy_Bongby_Day</a>
					<br/>
					<a class="underline underline-offset-3" href="https://x.com/hashtag/%EB%B0%A4%EB%B9%84%EB%A1%9C_%EA%B0%80%EB%93%9D%ED%95%9C_%EB%B0%98%EC%A7%9D%EC%9D%B4%EB%8A%94_%EC%97%AC%EB%A6%84?src=hashtag_click">#밤비로_가득한_반짝이는_여름</a>`
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	},
	{
		id: '2024-christmas-post',
		name: '2024 : CHRISTMAS POST',
		subName: 'GM Generates Co.,Ltd',
		date: '25-12-2024',
		category: 'Social Post Design',
		image: socialImg.ChirstmasRedHouse2024Thumbnail,
		tags: [tags.GraphicDesign, tags.SocialMediaDesign],
		contents: [
			defineContent(ImageDetail, {
				img: socialImg.ChirstmasRedHouse2024,
				class: 'text-center',
				classImg: 'w-full mx-auto preview',
				detail: `Graphics for social media posting.`,
				detailClass: 'mt-2'
			}),
			defineContent(MultipleImage, {
				images: [socialImg.ChirstmasRedHouse2024Card1, socialImg.ChirstmasRedHouse2024Card2],
				class: 'grid grid-cols-2 gap-2 w-2/3',
				classImg: 'size-50 mx-auto preview',
				detail: 'Graphics to be shared with private partners.',
				detailClass: 'text-center'
			}),
			defineContent(Paragraph, {
				str: 'Gingerbread houses: the sweetest way to celebrate the season.'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	},
	{
		id: '2025-newyear-post',
		name: '2025 : NEWYEAR POST',
		subName: 'GM Generates Co.,Ltd',
		date: '01-01-2025',
		category: 'Social Post Design',
		image: socialImg.NewYearSnake2025Thumbnail,
		tags: [tags.GraphicDesign, tags.SocialMediaDesign],
		contents: [
			defineContent(ImageDetail, {
				img: socialImg.NewYearSnake2025,
				class: 'text-center',
				classImg: 'w-full mx-auto preview',
				detail: `Graphics for social media posting.`,
				detailClass: 'mt-2'
			}),
			defineContent(Paragraph, {
				str: 'In 2025, the year of the Snake tn the Chinese calendar symbolizes wisdom, elegance, and transformation.'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	},
	{
		id: '2025-christmas-post',
		name: '2025 : CHRISTMAS POST',
		subName: 'GM Generates Co.,Ltd',
		date: '25-12-2025',
		category: 'Social Post Design',
		image: socialImg.WeLoveChirstmas2025Thumbnail,
		tags: [tags.GraphicDesign, tags.SocialMediaDesign],
		contents: [
			defineContent(ImageDetail, {
				img: socialImg.WeLoveChirstmas2025,
				class: 'text-center',
				classImg: 'w-full mx-auto preview',
				detail: `Graphics for social media posting.`
			}),
			defineContent(Paragraph, {
				str: 'Merry Christmas 2025, Stay iconic. '
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	},
	{
		id: '2026-newyear-post',
		name: '2026 : NEWYEAR POST',
		subName: 'GM Generates Co.,Ltd',
		date: '01-01-2025',
		category: 'Social Post Design',
		image: socialImg.HorseYearThumbnail2026,
		tags: [tags.GraphicDesign, tags.SocialMediaDesign],
		contents: [
			defineContent(ImageDetail, {
				img: socialImg.HorseYear2026,
				class: 'text-center',
				classImg: 'w-full mx-auto preview',
				detail: `Graphics for social media posting.`
			}),
			defineContent(Paragraph, {
				str: 'May the New Year 2026, the Year of the Horse, bring you a stronger heart, renewed energy, bright new opportunities, and endless possibilities.'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	}
];

const IllustrationProjects: Project[] = [
	{
		id: 'twin-flower',
		name: 'TWIN FLOWER',
		date: '30-05-2024',
		category: 'Illustration Design',
		image: illusImg.TwinFlowerThumbnail,
		tags: [tags.GraphicDesign, tags.Illustration],
		contents: [
			defineContent(ImageDetail, {
				img: illusImg.TwinFlower,
				classImg: 'w-full mx-auto preview',
				detailClass: 'mt-6',
				detail: `May 30, 2023 <br/><br/>Twin Flower" is a character design inspired by flowers, using a combination of pink and blue paired with yellow to create an intriguing and captivating color scheme. This design was created to teach how to create flower petals using Adobe Illustrator.`
			}),
			defineContent(ProgramUse, {
				list: [AISkill],
				class: 'mt-2'
			}),
			defineContent(ImageDetail, {
				img: illusImg.TwinFlower3Style,
				classImg: 'w-full mx-auto preview',
				class: 'mt-6'
			}),
			defineContent(ImageDetail, {
				img: illusImg.TwinFlowerHowTo,
				classImg: 'w-full mx-auto preview',
				detailClass: 'mt-4',
				detail: `<p class="flex w-full gap-4">Let’s make your own flower.
				<img src="${InstagramIcon}" alt="x icon" class="w-5 h-5 inline ml-auto"/>
				<img src="${TiktokIcon}" alt="x icon" class="w-5 h-5 inline"/>
				</p>`
			})
		]
	},

	{
		id: 'a-normal-day-in-sky-train',
		name: 'A NORMAL DAY IN SKY TRAIN',
		date: 'xx-xx-2024',
		category: 'Coordinator',
		image: illusImg.ANormalDayThumbnail,
		tags: [tags.GraphicDesign, tags.Illustration],
		contents: [
			defineContent(ImageDetail, {
				img: illusImg.ANormalDayThumbnail,
				classImg: 'w-2/3 mx-auto preview',
				detailClass: 'mt-6',
				detail: ``
			})
		]
	}
];

const creativeProducerProjects: Project[] = [uranusProject];

const projectCoordinatorProjects: Project[] = [
	{
		id: 'lookin-x-ease-around',
		name: 'LOOKIN’ X EASE AROUND',
		date: '03-08-2025',
		category: 'Coordinator',
		image: coordinatorImg.LookinXEaseThumbnail,
		tags: [tags.ProjectCoordinator],
		contents: [
			defineContent(ImageDetail, {
				img: coordinatorImg.LookinXEaseThumbnail,
				classImg: 'w-2/3 mx-auto preview ',
				detailClass: 'mt-6',
				detail: `A collaboration project between Thai eyewear brand Lookin’ and Thai artist Ease Around, launched under the collection name “Lookin’ Around.” The project involved the co-development of three eyewear designs bundled with gift sets, distributed through selected LOOKIN’ retail stores. The initiative focused on aligning creative collaboration with business objectives, enhancing customer value, and improving in-store sales performance, complemented by an exclusive pop-up store to elevate customer experience and drive engagement during the launch period.
<br/><br/>
<h6>Project Role & Responsibilities</h6>
<br/>
<ul>
<li>Served as the primary liaison between the brand and the artist, responsible for eliciting, clarifying, and managing design and production requirements from all stakeholders.</li>
<li>Conducted requirement analysis to identify constraints, risks, and dependencies within the production process, and proposed data-informed solutions aligned with business objectives.</li>
<li>Planned and facilitated project meetings, including requirement discussions, scope alignment sessions, and key decision checkpoints; prepared meeting agendas, documented decisions, and tracked action items.</li>
<li>Monitored project progress against defined milestones and supported stakeholder decision-making to ensure on-time delivery within agreed scope and constraints.</li>
</ul>
`
			})
		]
	},
	lateNightXOsamu,
	codecXOsamu,
	osamuGoodBkk
];

const assistantProducerProjects: Project[] = [];

const thesisProjects: Project[] = [];

export const projects = (tag: Tag): Project[] => {
	switch (tag) {
		case tags.ProductDesign:
			return productDesignProjects;
		case tags.SocialMediaDesign:
			return socialMediaDesignProjects;
		case tags.Illustration:
			return IllustrationProjects;
		case tags.ProjectCoordinator:
			return projectCoordinatorProjects;
		case tags.CreativeProducer:
			return creativeProducerProjects;
		case tags.AssistantProducer:
			return assistantProducerProjects;
		case tags.Thesis:
			return thesisProjects;
	}

	return [];
};

export const projectCount = (tag: Tag): number => {
	switch (tag) {
		case tags.GraphicDesign:
			return (
				productDesignProjects.length +
				socialMediaDesignProjects.length +
				IllustrationProjects.length
			);
		case tags.ProductDesign:
			return productDesignProjects.length;
		case tags.SocialMediaDesign:
			return socialMediaDesignProjects.length;
		case tags.Illustration:
			return IllustrationProjects.length;
		case tags.ProjectCoordinator:
			return projectCoordinatorProjects.length;
		case tags.CreativeProducer:
			return creativeProducerProjects.length;
		case tags.AssistantProducer:
			return assistantProducerProjects.length;
		case tags.Thesis:
			return thesisProjects.length;
	}

	return 0;
};

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
