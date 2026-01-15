import * as uranusImg from '$lib/assets/works/uranus';

import CardFlip from '$lib/components/project/card-flip.svelte';
import ImageDetail from '$lib/components/project/image-detail.svelte';
import MultipleImage from '$lib/components/project/multiple-image.svelte';
import Paragraph from '$lib/components/project/paragraph.svelte';
import ProgramUse from '$lib/components/project/program-use.svelte';
import ScrollImage from '$lib/components/project/scroll-image.svelte';
import SubProject from '$lib/components/project/sub-project.svelte';
import Title from '$lib/components/project/title.svelte';

import { AISkill, LRSkill, PSSkill } from '$lib/constants/skill';

import { defineContent } from '$lib/utils';

import type { Project } from '$lib/types';

export const uranus0005: Project[] = [
	{
		id: 'uranus-001',
		name: 'กล่องพัสดุ URANUS 2324<br/><span class="text-[0.75em]">WORLDWIDE SHIPPING BOX</span>',
		date: '',
		image: uranusImg.BoxThumbnail,
		details: 'Design a shipping package/parcel box for merchandise from the movie Uranus2324.',
		contents: [
			defineContent(ImageDetail, {
				img: uranusImg.BoxPoster,
				classImg: 'w-2/3 mx-auto preview',
				detail: 'Design a shipping package/parcel box for merchandise from the movie Uranus2324.'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4'
			}),
			defineContent(MultipleImage, {
				images: [uranusImg.BoxExample1, uranusImg.BoxExample2],
				class: 'grid grid-cols-2 gap-4',
				classImg: 'size-50 mx-auto preview'
			})
		]
	},
	{
		id: 'uranus-002',
		name: 'Film Camera URANUS 2324',
		date: '',
		image: uranusImg.CameraThumbnail,
		details:
			'<span class="leading-4.5">TIME FREEZER</span><br/>Capture your memories in a unique way with the URANUS2324 Time Freezer Black (NYC) single-use camera. Designed for ease of use and quick operation, this camera is perfect for anyone wanting to experience the charm of film photography.',
		contents: [
			defineContent(ImageDetail, {
				img: uranusImg.CameraPoster,
				classImg: 'w-2/3 mx-auto preview',
				detail:
					'<span class="text-sm leading-5">TIME FREEZER</span><br/>Capture your memories in a unique way with the URANUS2324 Time Freezer Black (NYC) single-use camera. Designed for ease of use and quick operation, this camera is perfect for anyone wanting to experience the charm of film photography.<br/><br/>Scope of Work for This Project<br/><br/><ul><ul><li>Packaging design</li><li>Film Camera Sticker</li><li>Film Camera Filter</li><li>Design images for social media and sales platforms</li></ul>'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			}),
			defineContent(Title, {
				h: 2,
				content: 'Design Sheet',
				class: 'font-almarai font-normal text-center'
			}),
			defineContent(MultipleImage, {
				images: [uranusImg.CameraSheet1, uranusImg.CameraSheet2],
				classImg: 'w-full preview',
				class: 'flex flex-col w-full gap-1'
			}),
			defineContent(ScrollImage, {
				images: [uranusImg.CameraExample1, uranusImg.CameraExample2, uranusImg.CameraExample3]
			}),
			defineContent(MultipleImage, {
				images: [uranusImg.CameraExample4, uranusImg.CameraExample5],
				classImg: 'w-full preview',
				class: 'flex flex-col w-full gap-1'
			})
		]
	},
	{
		id: 'uranus-003',
		name: 'Random Photo Card Pack',
		date: '',
		image: uranusImg.RandomCardThumbnail,
		details:
			'A random photo card pack featuring characters from URANUS 2324.<br/><br/>Each pack contains 4 random cards. There are a total of 13 different cards to collect.',
		contents: [
			defineContent(CardFlip, {
				front: uranusImg.RandomCardFlipFront,
				back: uranusImg.RandomCardFlipBack,
				class: 'w-[60%]'
			}),
			defineContent(Paragraph, {
				str: 'A random photo card pack featuring characters from URANUS 2324.Each pack contains 4 random cards. There are a total of 13 different cards to collect.<br/><br/>Scope of Work for This Project<br/><br/><ul><ul><li>Packaging</li><li>Retouch Photo Card</li><li>Design images for social media and sales platforms</li></ul>'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			}),
			defineContent(ScrollImage, {
				images: [
					uranusImg.RandomCardExample1,
					uranusImg.RandomCardExample2,
					uranusImg.RandomCardExample3
				]
			}),
			defineContent(MultipleImage, {
				images: [uranusImg.RandomCardExample4],
				classImg: 'w-[80%] mx-auto preview',
				class: 'flex flex-col w-full gap-1'
			})
		]
	},
	{
		id: 'uranus-004',
		name: 'Card Holder ',
		date: '',
		image: uranusImg.CardHolderExample2,
		details: 'A card holder inspired by URANUS 2324.',
		contents: [
			defineContent(ImageDetail, {
				img: uranusImg.CardHolderMain,
				classImg: 'w-2/3 mx-auto preview',
				detail:
					'A card holder inspired by URANUS 2324.<br/><br/>Scope of Work for This Project<br/><br/><ul><ul><li>Packaging</li><li>Card Holder</li><li>Acrylic</li><li>Cushion</li></ul>'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4 '
			}),
			defineContent(ScrollImage, {
				initIndex: 1,
				images: [
					uranusImg.CardHolderExample1,
					uranusImg.CardHolderExample2,
					uranusImg.CardHolderExample3,
					uranusImg.CardHolderExample4
				]
			}),
			defineContent(MultipleImage, {
				images: [uranusImg.CardHolderExample5],
				classImg: 'w-[80%] mx-auto preview',
				class: 'flex flex-col w-full gap-1'
			})
		]
	},
	{
		id: 'uranus-005',
		name: 'URANUS2324 T-SHIRT<br/>HOW WOULD IT BE IF…',
		date: '',
		image: uranusImg.TShirtHowWouldThumbnail,
		details: 'A T-shirt inspired by a key scene from the movie URANUS 2324.',
		contents: [
			defineContent(ImageDetail, {
				img: uranusImg.TShirtHowWouldMain,
				classImg: 'w-[70%] mx-auto preview',
				detail:
					'A T-shirt inspired by a key scene from the movie URANUS 2324.<br/><br/>Scope of Work for This Project<br/><br/><ul><ul><li>Garment pattern (T-shirt pattern)</li><li>Photo Retouch</li><li>T-Shirt Design</li></ul>'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill, LRSkill],
				class: 'mt-4 '
			}),
			defineContent(ScrollImage, {
				initIndex: 1,
				images: [
					uranusImg.TShirtHowWouldLogo,
					uranusImg.TShirtHowWouldWhite,
					uranusImg.TShirtHowWouldPhoto
				]
			}),
			defineContent(ScrollImage, {
				initIndex: 1,
				images: [
					uranusImg.TShirtHowWouldLogo,
					uranusImg.TShirtHowWouldBlack,
					uranusImg.TShirtHowWouldPhoto
				]
			}),
			defineContent(MultipleImage, {
				images: [uranusImg.TShirtHowWouldExample1],
				classImg: 'w-[80%] mx-auto preview',
				class: 'flex flex-col w-full gap-1'
			}),
			defineContent(SubProject, {
				class: 'mt-6',
				title: 'Creative Producer',
				disableClick: true,
				projects: [
					{
						id: 'uranus-003',
						name: 'Random Photo Card Pack',
						date: '',
						image: uranusImg.RandomCardExample2,
						details:
							'A random photo card pack featuring characters from URANUS 2324.<br/><br/>Each pack contains 4 random cards. There are a total of 13 different cards to collect.'
					}
				]
			})
		]
	},
	{
		id: 'uranus-006',
		name: 'URANUS2324 T-SHIRT<br/>I’M LIKE URANUS',
		date: '',
		image: uranusImg.TShirtImLikeUranusThumbnail,
		details: 'A T-shirt inspired by a key scene from the movie URANUS 2324.'
	},
	{
		id: 'uranus-007',
		name: 'URANUS2324 LIN&KATH<br/>HOODIE',
		date: '',
		image: uranusImg.HoodieLinKathThumbnail,
		details: 'A Hoodie inspired by a key scene from the movie URANUS 2324.'
	},
	{
		id: 'uranus-008',
		name: 'URANUS2324 LOVE&PAIN<br/>HOODIE',
		date: '',
		image: uranusImg.HoodieLovePainThumbnail,
		details: 'A Hoodie inspired by a key scene from the movie URANUS 2324.'
	}
];
