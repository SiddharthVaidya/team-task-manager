const express = require("express");
const router = express.Router();
const newTaskController = require('../controller/newTaskController');
const updateTaskController = require("../controller/updateTask");
const updateTaskAssignment = require('../controller/updateTaskAssignment')
const updateTaskStatus = require('../controller/updateTaskStatus')
const {getAllTaskController} = require("../controller/getTaskController");
const verifyJWT = require("../middlewares/verifyJWT");

router.post("/", newTaskController);
router.put("/:id", updateTaskController)
router.post("/:taskId/assign", updateTaskAssignment)
router.post("/:taskId/status", updateTaskStatus)
router.get("/", verifyJWT, getAllTaskController)

module.exports = router;