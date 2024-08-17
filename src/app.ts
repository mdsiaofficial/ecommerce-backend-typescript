import express, { Application } from "express"
import productsRouter from "./routes/products.routes"
import { config } from "./config/config"
import usersRouter from "./routes/users.routes"
import cors from "cors"
import { errorHandler } from "./middleware/errorHandler"
import ordersRouter from "./routes/orders.routes"

// app
const app:Application = express()

// app - use
app.use(express.json())
app.use(cors())
app.use(errorHandler)
// routes
app.get("/", (req, res) => {
  res.status(200).send("Start Backend with typescript.")
})
app.use("/products", productsRouter)
app.use("/users", usersRouter)
app.use("/orders", ordersRouter)


export default app