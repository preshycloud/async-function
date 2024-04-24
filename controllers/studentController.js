const Student = require('../models/studentModel')

const getAllStudents = async(req, res) => {
    try {
        const students = await Student.find()
        return res.status(200).json(students)

    } catch (error) {
        res.status(500)
        res.json(error)
        
    }
}


const createNewStudents = async(req, res) => {
    if (!req.body.name) {
        return res.status(400).json({message: "please enter your name"})
    } 


    if(!req.body.email) {
        res.status(400)
        res.json({ message: "Please enter your email address"})
    }

    if(!req.body.phone) {
        res.status(400)
        res.json({message: "Please enter your phone number"})
    }

    if(!req.body.password) {
        res.status(400)
        res.json({message: "Please enter your password"})
    }

    try {
        const newStudent = await Student.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })

        return res.status(201).json(newStudent)
    } catch (error) {
        return res.status(500).json(error)
    }

}


const getSingleStudent = async(req, res) => {
    try {
        const singleStudent = await Student.findById(req.params.id)
        res.status(200).json(singleStudent)
    } catch (error) {
        res.status(500).json(error)
    }
}


const updateStudents = async(req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if (updatedStudent) {
            return res.status(200).json(updatedStudent)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


const deleteStudents = async(req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id)
        if (deletedStudent){
            return res.status(200).json({message: "student deleted succefully"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAllStudents, createNewStudents, getSingleStudent, updateStudents, deleteStudents}