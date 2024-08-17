import express, { Application } from "express"
import mongoose from "mongoose"
import { configDotenv } from "dotenv"
import productsRouter from "./routes/products.routes"
import { config } from "./config/config"
import app from "./app"



// db + server
mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log("Application connected to DB.")
    
    // server start
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port} `)
    })
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error)
  })
