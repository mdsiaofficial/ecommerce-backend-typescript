import dotenv from "dotenv";

dotenv.config()

export const config = {
  port: process.env.PORT || 3000,
  MONGODB_URL: `mongodb+srv://mdsiaofficial:backendprojects@backendprojects.sr3p0.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=backendprojects`,
}