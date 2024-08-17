import express from 'express'
import { createOrder, fetchAllOrders } from '../controllers/orders.controllers'

const ordersRouter = express.Router()

ordersRouter.get("/", fetchAllOrders)
ordersRouter.post("/", createOrder)
// ordersRouter.get("/login", )


export default ordersRouter