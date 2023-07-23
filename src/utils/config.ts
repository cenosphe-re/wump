import { z } from 'zod';

const schema = z.object({
	PORT: z.string().default('4000'),
});

export const config = schema.parse(process.env);
