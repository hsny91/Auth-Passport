const express= require('express');

const router = express.Router();
router.get('/login',(req,res,next)=>{
    res.send("login Page")
});

router.get('/register',(req,res,next)=>{
    res.send("Register Page")
});

module.exports = router;