import express from "express"
import { createProducts, fetchProduct, fetchProducts, updateProduct } from "../controllers/products.controllers"
const productsRouter = express.Router()

// define - [get]
productsRouter.get("/", fetchProducts)
productsRouter.get("/:id", fetchProduct)

// define - [post]
productsRouter.post("/", createProducts)

// define - [put]
productsRouter.put("/:id", updateProduct)

export default productsRouter