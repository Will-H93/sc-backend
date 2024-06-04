const { Router } = require("express");
const statusController = require("../controllers/statusController");

const router = new Router();

router
    .route("/")
    .get(statusController.getStatus)
    .post(statusController.createStatus);

module.exports = router;