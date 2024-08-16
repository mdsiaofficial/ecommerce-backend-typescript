import mongoose from "mongoose";

export type TProduct = {
  _id: string,
  name: string,
  description: string,
  price: number,
  stockQuantity: number,
  category: string,
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model<TProduct>("Products", productSchema);
export default Products;