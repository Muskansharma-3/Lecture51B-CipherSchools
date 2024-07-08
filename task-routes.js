const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router;
const taskController = require("../controllers/task-controller");

router.post("/add", authMiddleware, taskController.addNewTask)
router.get("/self", authMiddleware, taskController.getTasksForUser)
module.exports=router;