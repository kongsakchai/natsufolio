/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Component } from 'svelte';

export type Tag = string;

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

export interface Content {
	Component: Component<any>;
	params: Record<string, any>;
}

export interface Project {
	id: string;
	image: string;
	name: string;
	date: string;
	endDate?: string;
	category?: string;
	// link?: Link;
	details?: string;
	// cover?: string;
	// coverAlign?: string;
	hastags?: string[];
	// skills?: Skill[];
	// remark?: string;
	// moreImages?: string[];
	// moreLinks?: Link[];
	tags?: Tag[];
	subTags?: Tag[];
	subProjectTitle?: string;
	subProject?: Project[];
	contents?: Content[];
}

export type CertificateType = string;

export interface Certificates {
	type: CertificateType;
	title: string;
	list: {
		name: string;
		img: string;
	}[];
}
