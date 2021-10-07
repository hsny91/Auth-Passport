module.exports.registerValidation = (username, password) => {
  const errors = [];
  if (username == "") {
    errors.push({ message: "Please fiil the username area" });
  }
  if (password == "") {
    errors.push({ message: "Please fiil the password area" });
  }
  if(password.length<6){
    errors.push({ message: "Password minimun length must be 6" });
  }
  return errors
};
