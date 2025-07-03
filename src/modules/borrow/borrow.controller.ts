import { Request, Response, Router } from "express";
import borrowZodSchema from "./borrow.zod";
import Borrow from "./borrow.model";

const borrowRoute = Router();

borrowRoute.post("/", async (req: Request, res: Response) => {
  try {
    const body = await borrowZodSchema.parseAsync(req.body);
    const borrow = await Borrow.create(body);
    const { book, quantity, dueDate } = req.body;
    res.status(200).json({
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
borrowRoute.get("/", async (req: Request, res: Response) => {
  try {
    const borrow = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookInfo",
        },
      },
      { $unwind: "$bookInfo" },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookInfo.title",
            isbn: "$bookInfo.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);
    res.status(200).json({
      status: true,
      message: "Borrowed books summary retrieved successfully",
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
