import mongoose from "mongoose";

export type TOrderProduct = {
  productId: string,
  quantity: number,
}
export type TOrder = {
  _id: string,
  userId: string,
  products: TOrderProduct[],
  totalAmount: number,
  status: "Pending" | "Completed",
}

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          required:true
        },
        quantity: {
          type: Number,
          required: true,
        }
      }
    ],
    totalQuantity: {
      type: Number,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      required: true,
    }

  }, { timestamps: true }
)

const Orders = mongoose.model<TOrder>("Orders", orderSchema)
export default Orders