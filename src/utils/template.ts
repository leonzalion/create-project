import type { ProjectTemplate } from '~/types/template.js';

const defineTemplateOptions = <T extends Record<string, ProjectTemplate>>(
	t: T
) => t;
export const templateOptions = defineTemplateOptions({
	typescript: {
		name: 'TypeScript',
		folderName: 'typescript',
		isDisplayed: true,
	},
	vite: {
		name: 'Vite TypeScript',
		folderName: 'vite-typescript',
		isDisplayed: true,
	},
});
export type TemplateOptions = typeof templateOptions;
