
import { Model, Types } from "mongoose";

export interface IBorrow{
    book: Types.ObjectId;
    quantity: number;
    dueDate: Date;
}

export interface borrowStaticMethods extends Model<IBorrow> {
  updateBookAvailability(
    bookId: Types.ObjectId,
  ): Promise<void>;
}