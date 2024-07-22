import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'

import authRouter from './routes/auth.routes.js'
import messageRouter from './routes/message.routes.js'
import userRouter from './routes/user.routes.js'
import connectToMongoDB from './db/conntectToMongoDB.js'
import { app, server } from './socket/socket.js'

const PORT = process.env.PORT || 8000

// MIDDLEWARES
app.use(express.json())
app.use(cookieParser())

// ROUTES
app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)
app.use("/api/users", userRouter)


server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})