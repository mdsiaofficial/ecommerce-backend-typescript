import express, { Application } from "express"
import mongoose from "mongoose"
import { configDotenv } from "dotenv"
import productsRouter from "./routes/products.routes"

// app
const app:Application = express()

// app - use
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.status(200).send("Start Backend with typescript.")
})
app.use("/products", productsRouter)


// db + server
mongoose
  .connect(process.env.MONGODB_URL || "")
  .then(() => {
    console.log("Application connected to DB.")
    
    // server start
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000} `)
    })
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error)
  })
