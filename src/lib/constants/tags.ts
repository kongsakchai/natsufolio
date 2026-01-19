import type { Tag } from '$lib/types';

export const tags = {
	GraphicDesign: 'Graphic Design' as Tag,
	ProjectCoordinator: 'Project Coordinator' as Tag,
	CreativeProducer: 'Creative Producer' as Tag,
	AssistantProducer: 'Assistant Producer' as Tag,
	Thesis: 'Thesis' as Tag,

	ProductDesign: 'Product Design' as Tag,
	SocialMediaDesign: 'Social Media Design' as Tag,
	PhotoRetouch: 'Photo Retouch' as Tag,
	Illustration: 'Illustration' as Tag
} as const;

export const certificateTypes = {
	Desing: 'DESIGN',
	BusinessAndMarketing: 'BUSINESS AND MARKETING',
	AgileAndScrum: 'AGILE/FSCRUM'
} as const;
