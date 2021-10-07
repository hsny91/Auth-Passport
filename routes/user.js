const express= require('express');
const UserController = require('../controllers/userController')
const router = express.Router();

router.get('/login',UserController.getUserLogin);
router.get('/register',UserController.getUserRegister);
router.post('/register',UserController.postUserRegister);
router.post('/login',UserController.postUserLogin);

module.exports = router;