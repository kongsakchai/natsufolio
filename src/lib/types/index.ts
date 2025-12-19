export enum Tags {
	GraphicDesign = 'Graphic Design',
	ProjectCoordinator = 'Project Coordinator',
	CreativeProducer = 'Creative Producer',
	AssistantProducer = 'Assistant Producer',
	Thesis = 'Thesis',

	ProductDesign = 'Product Design',
	SocialMediaDesign = 'Social Media Design',
	PhotoRetouch = 'Photo Retouch',
	Illustration = 'Illustration'
}

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
	category?: string;
	link?: Link;
	details?: string;
	cover?: string;
	coverAlign?: string;
	hastags?: string[];
	skills?: Skill[];
	remark?: string;
	moreImages?: string[];
	moreLinks?: Link[];
	tags?: Tags[];
	subTags?: Tags[];
}

export enum CertificateType {
	Desing = 'DESIGN',
	BusinessAndMarketing = 'BUSINESS AND <br/>MARKETING',
	AgileAndScrum = 'AGILE/SCRUM'
}

export interface Certificates {
	type: CertificateType;
	list: {
		name: string;
		img: string;
	}[];
}
