const formValidation = require('../validation/formValidation')

module.exports.getUserLogin = (req, res, next) => {
  res.render("pages/login");
};

module.exports.getUserRegister = (req, res, next) => {
  res.render("pages/register");
};

module.exports.postUserLogin = (req, res, next) => {
  res.send("Login Attempted");
};

module.exports.postUserRegister = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const validationErrors = formValidation.registerValidation(username, password);
  if(validationErrors.length >0){
      return res.render('pages/register', {
          username:username,
          password: password,
          errors: validationErrors
      })
  }
  res.send('Register Attempted')
};
