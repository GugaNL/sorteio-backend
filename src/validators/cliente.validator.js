const { body, param } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const login = function () {
  return [
    body("email", validatorMessage("Email")).exists().bail().isString(), //bail serve para agrupar os erros
    body("senha", validatorMessage("Senha")).exists().bail().isString(),
  ];
};

const findById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

module.exports = {
  login,
  findById
};
