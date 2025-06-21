import { Request, Response, Router } from "express";
import borrowZodSchema from "./borrow.zod";
import Borrow from "./borrow.model";

const borrowRoute = Router();

borrowRoute.post("/api/borrow", async (req: Request, res: Response) => {
  try {
    const body = await borrowZodSchema.parseAsync(req.body);
    const borrow = await Borrow.create(body);
   await borrow.save();
    res.status(201).json({
      status: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    res.status(404).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
});

export default borrowRoute;
