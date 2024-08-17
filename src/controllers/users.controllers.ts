import { Request, Response } from "express";
import { Users } from "../models/users.model";
const bcrypt = require("bcryptjs")


export const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.find()
    if (!users) {
      res.status(404).json({message: "data not error"})
    }
    res.status(200).json({message: "Data found.", data:users})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "server error"})
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body
    const user = await Users.findOne({ email })
    if (user) {
      console.log(`Users already exists. Please go to login.`)
      // res.status(400).json({ message: "User already exists." })
    }
    const newPassword = bcrypt.hashSync(password, 14)
    const newUser = await Users.create({
      name,
      email,
      password:newPassword,
      role
    })
    res.status(201).json({message: "User created successfully", data: newUser})

  } catch (error) {
    console.log(error)
    res.status(500).json({message: "server error"})
  }
}