const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./src/routers/user.router')

const app = express()
app.use(bodyParser.json())
app.use(userRouter)

const PORT = 8888
app.listen(PORT, () => {
    console.log(`Server is running well at ${PORT}`)
})