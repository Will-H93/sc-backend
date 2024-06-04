const { Status } = require("../models")

const createStatus = async (req, res) => {
    await Status.create(req.body).then((status) => {
        res.status(201).json(status)
    })
}

const getStatus = async (req, res) => {
    await Status.findAll().then((status) => {
        res.status(200).json(status)
    })
}

module.exports = {
    createStatus,
    getStatus
}