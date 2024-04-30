const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')
const signUpController = require('../controller/signUpController')
const profileController = require('../controller/profileController')
const verifyJWT = require('../middlewares/verifyJWT')

router.post('/sign-up', signUpController);
router.post('/login', loginController);
router.get('/:id', verifyJWT, profileController.getProfile)
//router.post('/logout', logoutController)
//router.put('/:id', profileController.updateProfile)

module.exports = router;