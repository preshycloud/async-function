const express = require('express')
const router = express.Router()

const {getAllStudents, createNewStudents, getSingleStudent, updateStudents, deleteStudents} = require('../controllers/studentController')

router.route('/students').get(getAllStudents).post(createNewStudents)
router.route('/students/:id').get(getSingleStudent).put(updateStudents).delete(deleteStudents)













module.exports = router