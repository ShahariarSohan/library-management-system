import mongoose, { Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String },
    author: { type: String },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    imgUrl:{type:String},
    isbn: { type: String,unique:true },
    description: { type: String },
    copies: {
      type: Number,
      min: [0, "Copies must be a positive integer"],
      validate: {
        validator: Number.isInteger,
        message: "Copies must be a positive integer",
      },
    },
    available: { type: Boolean, default: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
