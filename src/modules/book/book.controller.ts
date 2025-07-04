
import { Request, Response, Router } from "express";
import bookZodSchema from "./book.zod";
import Book from "./book.model";

const bookRoute = Router();

//post book

bookRoute.post("/", async (req: Request, res: Response) => {
  try {
      const body = await bookZodSchema.parseAsync(req.body);
    const book = await Book.create(body);
     
    res.status(200).json({
      status: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
});

// get all books
bookRoute.get("/", async (req: Request, res: Response) => {
  try {
    const genre = req.query.filter;
    let book;
    if (!genre) {
      book = await Book.find().sort({ title: -1 }).limit(10);
    } else {
      book = await Book.find({ genre }).sort({ title: -1 }).limit(10);
    }

    res.status(200).json({
      status: true,
      message: "Books retrieved successfully",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
});
//get single book

bookRoute.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);

    res.status(200).json({
      status: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
});
//update single book
bookRoute.put("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const existingBook = await Book.findById(bookId);
    const updatedData = {
      ...existingBook?.toObject(),
      ...req.body,
    };
    updatedData.copies = Number(updatedData.copies);
    updatedData.available = updatedData.copies > 0;
    
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedData, {
      new: true,
      overwrite: true,
    });

    res.status(200).json({
      status: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(404).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
});
bookRoute.delete("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    await Book.findByIdAndDelete(bookId);

    res.status(200).json({
      status: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
});
export default bookRoute;
