import 'dotenv/config'
import express from 'express'
const app = express()

import authRouter from './routes/auth.routes.js'
import connectToMongoDB from './db/conntectToMongoDB.js'

const PORT = process.env.PORT || 8000

app.use("/api/auth", authRouter)


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})