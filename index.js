const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const studentRoute = require('./routes/studentRoute')

// .env file is a file used to hide sensitive information
// we first import the .env file then call out our port(as saved in our file)
require('dotenv').config()
const port = process.env.PORT


const connectDB = require("./databases/db")
connectDB()


app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(studentRoute)





app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})