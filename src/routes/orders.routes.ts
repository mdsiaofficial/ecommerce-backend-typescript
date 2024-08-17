import express from 'express'
import { createOrder, fetchAllOrders, findOrder } from '../controllers/orders.controllers'

const ordersRouter = express.Router()

ordersRouter.get("/", fetchAllOrders)
ordersRouter.post("/", createOrder)
ordersRouter.get("/:id", findOrder)


export default ordersRouter