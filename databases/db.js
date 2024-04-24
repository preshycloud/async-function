const mongoose = require('mongoose')
require('dotenv').config()


const connectDB = async() => {

    try {
        const connect = await mongoose.connect(process.env.MONGODB)
        console.log('Database connected successfully')
    } catch (error) {
        throw new Error('error connecting to database')
    }

}


module.exports = connectDB