import { z } from "zod";

const borrowZodSchema = z.object({
    book: z.string(),
    quantity: z.number(),
    dueDate: z.date(),
})
export default borrowZodSchema;