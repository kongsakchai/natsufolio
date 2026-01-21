// import { HappyBambyDay, NamYejun, PlaveDebut100 } from '$lib/assets/works';
import { InstagramIcon, TiktokIcon, XIcon } from '$lib/assets/icons';
import * as illusImg from '$lib/assets/works/illustration';
import * as coordinatorImg from '$lib/assets/works/project-coordinator';
import * as socialImg from '$lib/assets/works/social-media';
import * as uranusImg from '$lib/assets/works/uranus';

import ImageDetail from '$lib/components/project/image-detail.svelte';
import MultipleImage from '$lib/components/project/multiple-image.svelte';
import Paragraph from '$lib/components/project/paragraph.svelte';
import ProgramUse from '$lib/components/project/program-use.svelte';
import SubProject from '$lib/components/project/sub-project.svelte';

import { AISkill, PSSkill } from '$lib/constants/skill';
import { tags } from '$lib/constants/tags';

import { defineContent } from '$lib/utils';

import type { Menu, Project, Tag } from '$lib/types';

import { uranus0004 } from './sub/uranus';

export const projects: Project[] = [
	{
		id: '0001',
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
		id: '0002',
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
		id: '0003',
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
		id: '0004',
		name: 'URANUS 2324',
		date: '05-09-2023',
		endDate: '04-07-2024',
		category: 'Merchandise Design',
		image: uranusImg.UranusPosterThumbnail,
		tags: [tags.ProductDesign, tags.GraphicDesign],
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
				img: uranusImg.UranusEndCredit,
				classImg: 'preview'
			}),
			defineContent(SubProject, {
				class: 'mt-6',
				title: 'Project Design Contributions',
				projects: uranus0004
			})
		]
	},
	{
		id: '0005',
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
		id: '0006',
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
		id: '0007',
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
				str: 'Merry Christmas 2025, Stay iconic. '
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			})
		]
	},
	{
		id: '0008',
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
	},
	{
		id: '0009',
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
		id: '0010',
		name: 'LOOKIN’ X EASE AROUND',
		date: '03-08-2025',
		category: 'Coordinator',
		image: coordinatorImg.LookinXEaseThumbnail,
		tags: [tags.ProjectCoordinator],
		contents: []
	},
	{
		id: '0011',
		name: 'LATE NIGHT DANCE CLUB <br/>X OSAMU GOODS BKK',
		date: '13-12-2025',
		category: 'Coordinator',
		image: coordinatorImg.LateNightXOsamuThumbnail,
		tags: [tags.ProjectCoordinator],
		contents: []
	},
	{
		id: '0012',
		name: 'CODEC CREATION X<br/> OSAMU GOODS BKK',
		date: 'xx-xx-2026',
		category: 'Coordinator',
		image: coordinatorImg.CodecCreatorThumbnail,
		tags: [tags.ProjectCoordinator],
		contents: []
	},
	{
		id: '0013',
		name: 'OSAMU GOODS BKK',
		subNameCard: 'SONY CREATIVE PRODUCTS',
		date: '01-01-2024',
		category: 'Coordinator',
		image: coordinatorImg.OsamuGoodBBKThumbnail,
		tags: [tags.ProjectCoordinator],
		contents: []
	},
	{
		id: '0014',
		name: 'A NORMAL DAY IN SKY TRAIN',
		date: 'xx-xx-2024',
		category: 'Coordinator',
		image: illusImg.ANormalDayThumbnail,
		tags: [tags.GraphicDesign, tags.Illustration],
		contents: []
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
