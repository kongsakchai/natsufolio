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

export interface Project {
	id: string;
	image: string;
	name: string;
	date: string;
	link?: Link;
	details?: string;
	cover?: string;
	coverAlign?: string;
	hastags?: string[];
	skills?: Skill[];
	remark?: string;
	moreImages?: string[];
	moreLinks?: Link[];
}
