const { Team } = require("../models")

const createTeam = async (req, res) => {
    await Team.create(req.body).then((teams) => {
        res.status(201).json(teams)
    })
}

const getTeam = async (req, res) => {
    await Team.findAll().then((teams) => {
        res.status(200).json(teams)
    })
}

module.exports = {
    createTeam,
    getTeam
}