module.exports.getUserLogin = (req,res,next)=>{
    res.render('pages/login')
};

module.exports.getUserRegister = (req,res,next)=>{
    res.render('pages/register')
};

module.exports.postUserLogin = (req,res,next)=>{
    res.send('Login Attempted')
};

module.exports.postUserRegister= (req,res,next)=>{
    console.log(req.body)
    res.send('Regsiter Attempted')
};

