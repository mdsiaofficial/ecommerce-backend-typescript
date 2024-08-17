import express from 'express'
import { createUser, fetchAllUsers } from '../controllers/users.controllers'

const usersRouter = express.Router()

usersRouter.get("/", fetchAllUsers)
usersRouter.post("/", createUser)


export default usersRouter