import mongoose, { Schema, SchemaTypes, Types } from "mongoose";
import { IBorrow } from "./borrow.interface";
import Book from "../book/book.model";
import { borrowStaticMethods } from "../borrow/borrow.interface";


const borrowSchema = new Schema<IBorrow, borrowStaticMethods>(
  {
    book: { type: SchemaTypes.ObjectId, ref: "Book" },
    quantity: {
      type: Number,
      min: [0, "Quantity must be a positive integer"],
      validate: {
        validator: Number.isInteger,
        message: "Quantity must be a positive integer",
      },
    },
    dueDate: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// pre hook 
borrowSchema.pre("save", async function () {
  const book = await Book.findById(this.book);
  if (book && book.copies===0) {
   throw new Error("Book copies  unavailable")
  }
})

//post hook
borrowSchema.post("save", async function () {
  const book = await Book.findById(this.book);
  if (book) {
    book.copies = book.copies - this.quantity;
    await book.save();
  }
  await Borrow.updateBookAvailability(this.book);
})

// static methods
borrowSchema.static(
  "updateBookAvailability",
  async function (bookId: Types.ObjectId) {
    const book = await Book.findById(bookId);
      
      if (book && book.copies <= 0) {
        book.available = false;
        await book.save();
      }     
    }
);
const Borrow = mongoose.model<IBorrow, borrowStaticMethods>(
  "Borrow",
  borrowSchema
);
export default Borrow;
