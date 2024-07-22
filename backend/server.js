import 'dotenv/config'
import path from 'node:path'
import express from 'express'
import cookieParser from 'cookie-parser'

import authRouter from './routes/auth.routes.js'
import messageRouter from './routes/message.routes.js'
import userRouter from './routes/user.routes.js'
import connectToMongoDB from './db/conntectToMongoDB.js'
import { app, server } from './socket/socket.js'

const PORT = process.env.PORT || 8000

const __dirname = path.resolve()

// MIDDLEWARES
app.use(express.json())
app.use(cookieParser())

// ROUTES
app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)
app.use("/api/users", userRouter)

// STATIC MIDDLEWARE TO USE STATIC FILES
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})