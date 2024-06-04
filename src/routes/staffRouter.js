const { Router } = require("express");
const staffController = require("../controllers/staffController");

const router = new Router();

router
    .route("/")
    .get(staffController.getStaff)
    .post(staffController.createStaff);
module.exports = router;
