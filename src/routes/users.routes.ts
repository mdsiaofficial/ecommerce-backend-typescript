import express from 'express'
import { fetchAllUsers, loginUser, registerUser } from '../controllers/users.controllers'

const usersRouter = express.Router()

usersRouter.get("/", fetchAllUsers)
usersRouter.post("/register", registerUser)
usersRouter.get("/login", loginUser)


export default usersRouter