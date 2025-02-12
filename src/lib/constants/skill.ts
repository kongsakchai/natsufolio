import { AdobeIllustrator, AdobeLightroom, AdobePhotoshop, Figma } from '$lib/assets/icons';

import type { Skill } from '$lib/types';

export const AISkill: Skill = {
	icon: AdobeIllustrator,
	name: 'Adobe Illustrator',
	level: 'Advance'
};

export const LRSkill: Skill = {
	icon: AdobeLightroom,
	name: 'Adobe Lightroom',
	level: 'Advance'
};

export const PSSkill: Skill = {
	icon: AdobePhotoshop,
	name: 'Adobe Photoshop',
	level: 'Advance'
};

export const FigmaSkill: Skill = {
	icon: Figma,
	name: 'Figma',
	level: 'Advance'
};
