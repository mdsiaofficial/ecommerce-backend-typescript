import { NextFunction } from "express";
import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

export interface TUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // ensure emails are unique
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre<TUser>("save", async function (next: NextFunction) {
  if (!this.isModified("password")) {
    return next(); // Continue if the password field hasn't been modified
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next(); // Call next() after hashing the password
  } catch (err) {
    next(err); // Pass the error to the next middleware in case of failure
  }
});

export const Users = mongoose.model<TUser>("Users", userSchema);
