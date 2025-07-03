import { z } from "zod";

const bookZodSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  isbn: z.string(),
  imgUrl:z.string().optional(),
  description: z.string().optional(),
  copies: z.number(),
  available: z.boolean().optional(),
});
export default bookZodSchema;
