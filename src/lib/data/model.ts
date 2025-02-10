export interface ProjectYearDetail {
	id: string;
	image: string;
	coverAlign: string;
}

export interface ProjectYear {
	year: number;
	projects: ProjectYearDetail[];
}
