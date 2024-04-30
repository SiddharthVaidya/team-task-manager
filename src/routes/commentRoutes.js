const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/verifyJWT');
const commentController = require('../controller/commentController')

router.post('/:taskId', verifyJWT, commentController)

module.exports = router;