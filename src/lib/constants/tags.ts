import type { CertificateType, Tag } from '$lib/types';

export const tags: Record<string, Tag> = {
	GraphicDesign: 'Graphic Design',
	ProjectCoordinator: 'Project Coordinator',
	CreativeProducer: 'Creative Producer',
	AssistantProducer: 'Assistant Producer',
	Thesis: 'Thesis',

	ProductDesign: 'Product Design',
	SocialMediaDesign: 'Social Media Design',
	PhotoRetouch: 'Photo Retouch',
	Illustration: 'Illustration'
};

export const certificateTypes: Record<string, CertificateType> = {
	Desing: 'DESIGN',
	BusinessAndMarketing: 'BUSINESS AND MARKETING',
	AgileAndScrum: 'AGILE/SCRUM'
};
