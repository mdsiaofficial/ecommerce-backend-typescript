import express, { Application } from "express"
import productsRouter from "./routes/products.routes"
import { config } from "./config/config"
import usersRouter from "./routes/users.routes"
// app
const app:Application = express()

// app - use
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.status(200).send("Start Backend with typescript.")
})
app.use("/products", productsRouter)
app.use("/users", usersRouter)

export default app