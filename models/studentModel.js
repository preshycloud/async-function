const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    phone: {
        type: Number,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        unique: true,
    }
},

// used to grad the exact date and time a record was used in the db
{timestamps: true}

)

module.exports = mongoose.model('Student', studentSchema)