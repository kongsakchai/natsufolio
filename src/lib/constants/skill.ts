import { AiIcon, FigmaIcon, JiraIcon, LrIcon, NotionIcon, PsIcon } from '$lib/assets/icons';

import type { Skill } from '$lib/types';

export const AISkill: Skill = {
	icon: AiIcon,
	name: 'Adobe Illustrator',
	level: 'Advance'
};

export const LRSkill: Skill = {
	icon: LrIcon,
	name: 'Adobe Lightroom',
	level: 'Advance'
};

export const PSSkill: Skill = {
	icon: PsIcon,
	name: 'Adobe Photoshop',
	level: 'Advance'
};

export const FigmaSkill: Skill = {
	icon: FigmaIcon,
	name: 'Figma',
	level: 'Advance'
};

export const JiraSkill: Skill = {
	icon: JiraIcon,
	name: 'Jira',
	level: 'Intermediate'
};

export const NotionSkill: Skill = {
	icon: NotionIcon,
	name: 'Notion',
	level: 'Intermediate'
};
