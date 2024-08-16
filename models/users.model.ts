import mongoose from "mongoose";

export type TUser = {
  _id: string,
  name: string,
  password: string,
  role: number,
}
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required:true,
    },
    password: {
      type: String,
      required:true,
    },
    role: {
      type: String,
      required:true,
    }
  },{timestamps:true}
)

export const Users = mongoose.model<TUser>("Users", userSchema)
