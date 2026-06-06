import { z } from "zod";

export const createStudentSchema = z.object({
	name: z.string().min(1, "Name is required").max(100, "Name is too long"),
	roll: z.string().min(1, "Roll is required").max(10, "Roll is too long"),
});

export const updateStudentSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.max(100, "Name is too long")
		.optional(),
	roll: z
		.string()
		.min(1, "Roll is required")
		.max(10, "Roll is too long")
		.optional(),
});

export const studentIdSchema = z.object({
	id: z.string().regex(/^\d+$/, "ID must be a number"),
});

export type CreateStudentDto = z.infer<typeof createStudentSchema>;
export type UpdateStudentDto = z.infer<typeof updateStudentSchema>;
