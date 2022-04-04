const express =require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('../routes/routes')
const cors = require('cors')


dotenv.config()


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.22plk.mongodb.net/${process.env.TABLE}?retryWrites=true&w=majority`, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(4000,()=>console.log("server is up and running"))

