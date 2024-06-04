const { Staff } = require("../models")

const createStaff = async (req, res) => {
    await Staff.create(req.body).then((staffs) => {
        res.status(201).json(staffs)
    })
}

const getStaff = async (req, res) => {
    await Staff.findAll().then((staffs) => {
        res.status(200).json(staffs)
    })
}

module.exports = {
    createStaff,
    getStaff
}