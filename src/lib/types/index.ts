/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Component, ComponentProps } from 'svelte';

export interface Experience {
	year: number;
	title: string;
	details: string;
}

export interface Skill {
	icon: string;
	name: string;
	level: string;
}

export interface Link {
	label?: string;
	icon?: string;
	url: string;
}

export interface Content<T extends Component> {
	Component: T;
	params: ComponentProps<T>;
}

export interface Project {
	id: string;
	image: string;
	imageStyle?: string;
	name: string;
	subNameCard?: string;
	subName?: string;
	date: string;
	endDate?: string;
	category?: string;
	details?: string;
	hastags?: string[];
	subProjectTitle?: string;
	subProject?: Project[];
	contents?: Content<any>[];
	internal?: string;
	external?: string;
}

export interface Certificates {
	type: string;
	title: string;
	list: {
		name: string;
		img: string;
	}[];
}

export interface Menu {
	name: string;
	submenu?: Menu[];
}
