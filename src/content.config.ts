import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		/*
		  category : la section principale de navigation.
		  Valeurs acceptées : 'terrain' | 'curiosite' | 'echappees'
		  C'est ce qui alimente les pages /blog/terrain, /blog/curiosite, /blog/echappees
		*/
		category: z.enum(['terrain', 'curiosite', 'echappees']).optional(),
		/*
		  subcategory : l'étiquette fine affichée sur les cards et dans les articles.
		  Exemples : 'marketing', 'ia', 'tech', 'voyage', 'lecture', 'culture'...
		  Pas de liste fixe — tu peux en ajouter librement.
		*/
		subcategory: z.string().optional(),
	}),
});

export const collections = { blog };