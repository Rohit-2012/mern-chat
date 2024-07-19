import 'dotenv/config'
import express from 'express'

import authRouter from './routes/auth.routes.js'
import connectToMongoDB from './db/conntectToMongoDB.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

app.use("/api/auth", authRouter)


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})