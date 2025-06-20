
import mongoose, { Schema, SchemaTypes } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: SchemaTypes.ObjectId },
    quantity: {
      type: Number,
      min: [0, "Quantity must be a positive integer"],
      validate: {
        validator: Number.isInteger,
        message: "Quantity must be a positive integer",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Borrow = mongoose.model<IBorrow>("Borrow", borrowSchema)
export default Borrow;