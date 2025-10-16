import express from 'express'

import questionRouter from './routers/questionRoutes.js'
import userRoutes from '.routes/userRoutes.js'


const PORT = process.env.PORT || "3000"

const app = express()

app.use(express.json())
app.use('/questions',questionRouter)
app.use('/users',userRoutes)


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
