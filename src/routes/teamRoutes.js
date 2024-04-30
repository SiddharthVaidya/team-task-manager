const express = require("express");
const router = express.Router();
const createTeamController = require('../controller/createTeamController')
const addTeamMemberController = require('../controller/addTeamMemberController')


router.post('/', createTeamController)
router.post('/addMember', addTeamMemberController)

module.exports = router;