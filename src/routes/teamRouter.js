const { Router } = require("express");
const teamController = require("../controllers/teamController");

const router = new Router();

router
    .route("/")
    .get(teamController.getTeam)
    .post(teamController.createTeam);

module.exports = router;