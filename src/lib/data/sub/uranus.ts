import {
	UranusBox,
	UranusBox1,
	UranusBox2,
	UranusCamera,
	UranusCameraEx0,
	UranusCameraEx1,
	UranusCameraEx2,
	UranusCameraEx3,
	UranusCameraEx4,
	UranusCameraSheet,
	UranusCameraSheet2,
	UranusCardBack,
	UranusCardFront,
	UranusCardHolder,
	UranusCardHolder1,
	UranusCardHolder2,
	UranusCardHolder3,
	UranusCardHolder4,
	UranusCardHolder5,
	UranusDoubleBox,
	UranusDoubleCamera,
	UranusHoodie,
	UranusHoodie2,
	UranusRadomCard1,
	UranusRadomCard2,
	UranusRadomCard3,
	UranusRadomCard4,
	UranusShirt,
	UranusShirt2
} from '$lib/assets/works';

import CardFlip from '$lib/components/project/card-flip.svelte';
import ImageDetail from '$lib/components/project/image-detail.svelte';
import MultipleImage from '$lib/components/project/multiple-image.svelte';
import Paragraph from '$lib/components/project/paragraph.svelte';
import ProgramUse from '$lib/components/project/program-use.svelte';
import ScrollImage from '$lib/components/project/scroll-image.svelte';
import Title from '$lib/components/project/title.svelte';

import { AISkill, PSSkill } from '$lib/constants/skill';

import { defineContent } from '$lib/utils';

import type { Project } from '$lib/types';

export const uranus0005: Project[] = [
	{
		id: 'uranus-001',
		name: 'กล่องพัสดุ URANUS 2324<br/><span class="text-[0.75em]">WORLDWIDE SHIPPING BOX</span>',
		date: '',
		image: UranusBox,
		details: 'Design a shipping package/parcel box for merchandise from the movie Uranus2324.',
		contents: [
			defineContent(ImageDetail, {
				img: UranusDoubleBox,
				classImg: 'w-2/3 mx-auto preview',
				detail: 'Design a shipping package/parcel box for merchandise from the movie Uranus2324.'
			}),
			defineContent(ProgramUse, {
				list: [PSSkill, AISkill],
				class: 'mt-4'
			}),
			defineContent(MultipleImage, {
				images: [UranusBox1, UranusBox2],
				class: 'grid grid-cols-2 gap-4',
				classImg: 'size-50 mx-auto preview'
			})
		]
	},
	{
		id: 'uranus-002',
		name: 'Film Camera URANUS 2324',
		date: '',
		image: UranusCamera,
		details:
			'<span class="leading-4.5">TIME FREEZER</span><br/>Capture your memories in a unique way with the URANUS2324 Time Freezer Black (NYC) single-use camera. Designed for ease of use and quick operation, this camera is perfect for anyone wanting to experience the charm of film photography.',
		contents: [
			defineContent(ImageDetail, {
				img: UranusDoubleCamera,
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
				images: [UranusCameraSheet, UranusCameraSheet2],
				classImg: 'w-full preview',
				class: 'flex flex-col w-full gap-1'
			}),
			defineContent(ScrollImage, {
				images: [UranusCameraEx0, UranusCameraEx1, UranusCameraEx2]
			}),
			defineContent(MultipleImage, {
				images: [UranusCameraEx3, UranusCameraEx4],
				classImg: 'w-full preview',
				class: 'flex flex-col w-full gap-1'
			})
		]
	},
	{
		id: 'uranus-003',
		name: 'Random Photo Card Pack',
		date: '',
		image: UranusRadomCard1,
		details:
			'A random photo card pack featuring characters from URANUS 2324.<br/><br/>Each pack contains 4 random cards. There are a total of 13 different cards to collect.',
		contents: [
			defineContent(CardFlip, {
				front: UranusCardFront,
				back: UranusCardBack,
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
				images: [UranusRadomCard2, UranusRadomCard1, UranusRadomCard3]
			}),
			defineContent(MultipleImage, {
				images: [UranusRadomCard4],
				classImg: 'w-[80%] mx-auto preview',
				class: 'flex flex-col w-full gap-1'
			})
		]
	},
	{
		id: 'uranus-004',
		name: 'Card Holder ',
		date: '',
		image: UranusCardHolder1,
		details: 'A card holder inspired by URANUS 2324.',
		contents: [
			defineContent(ImageDetail, {
				img: UranusCardHolder,
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
				images: [UranusCardHolder4, UranusCardHolder1, UranusCardHolder2, UranusCardHolder3]
			}),
			defineContent(MultipleImage, {
				images: [UranusCardHolder5],
				classImg: 'w-[80%] mx-auto preview',
				class: 'flex flex-col w-full gap-1'
			})
		]
	},
	{
		id: 'uranus-005',
		name: 'URANUS2324 T-SHIRT<br/>HOW WOULD IT BE IF…',
		date: '',
		image: UranusShirt,
		details: 'A T-shirt inspired by a key scene from the movie URANUS 2324.'
	},
	{
		id: 'uranus-006',
		name: 'URANUS2324 T-SHIRT<br/>I’M LIKE URANUS',
		date: '',
		image: UranusShirt2,
		details: 'A T-shirt inspired by a key scene from the movie URANUS 2324.'
	},
	{
		id: 'uranus-007',
		name: 'URANUS2324 LIN&KATH<br/>HOODIE',
		date: '',
		image: UranusHoodie,
		details: 'A Hoodie inspired by a key scene from the movie URANUS 2324.'
	},
	{
		id: 'uranus-008',
		name: 'URANUS2324 LOVE&PAIN<br/>HOODIE',
		date: '',
		image: UranusHoodie2,
		details: 'A Hoodie inspired by a key scene from the movie URANUS 2324.'
	}
];
