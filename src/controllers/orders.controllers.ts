import { NextFunction, Request, Response } from "express";
import Orders, { TOrder } from "../models/orders.model";

export const fetchAllOrders = async (req:Request, res: Response, next:NextFunction) => {
  try {
    const { orderNumber, userId, products, totalQuantity, totalAmount, status } = req.body
    const orders: TOrder[] = await Orders.find()
    res.status(201).json(orders)
    
  } catch (error) {
    next(error)
  }
}

export const createOrder = async (req:Request, res: Response, next:NextFunction) => {
  try {
    const { orderNumber, userId, products, totalQuantity, totalAmount, status } = req.body

    if (!orderNumber || !userId || !products || !totalQuantity || !totalAmount || !status) {
      throw new Error("All fields are required.")
    }

    

    const order: TOrder = await Orders.create({
      orderNumber,
      userId,
      products,
      totalAmount,
      totalQuantity,
      status
    })

    res.status(201).json({message:"Order Created successfully", order:order})
  } catch (error) {
    next(error)
  }
}