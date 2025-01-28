export interface ProjectType {
	id: number;
	projectUrl: string;
	title: string;
	image: {url: string; alt: string};
	description: string;
	pageUrl: string;
	buildYear: number;
	gitHub: string;
}
