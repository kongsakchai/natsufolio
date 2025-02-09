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
	name: string;
	icon: string;
	url: string;
}

export interface Project {
	id: string;
	image: string;
	name: string;
	date: string;
	details?: string;
	cover?: string;
	hastags?: string[];
	skill?: Skill[];
	moreImages?: string[];
	label?: string;
	xLink?: string;
	links?: Link[];
}
