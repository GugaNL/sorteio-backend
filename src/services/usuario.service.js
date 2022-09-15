//const usuarioRepository = require("../repositories/usuario.repository");
require("dotenv").config();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const create = async function (usuario) {
  return usuario;
};

// const create = async function (usuario) {
//   const userExists = await usuarioRepository.findUserToValidate({
//     login: usuario.login,
//   });

//   if (userExists) {
//     return createError(409, "Usuário já existe");
//   }

//   usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT);
//   const usuarioCriado = await usuarioRepository.create(usuario);
//   return usuarioCriado;
// };

// const listUsers = async function () {
//   const usuarios = await usuarioRepository.listUsers();
//   return usuarios;
// };

// const findUser = async function (id) {
//   const usuario = await usuarioRepository.findUser(id);

//   if (!usuario) {
//     return createError(404, "Usuário não encontrado");
//   }

//   return usuario;
// };

// const updateUser = async function (usuario, id) {
//   const userExists = await usuarioRepository.findUser(id);

//   if (!userExists) {
//     return createError(404, "Usuário não existe");
//   }

//   await usuarioRepository.updateUser(usuario, id);

//   return await usuarioRepository.findUser(id);
// };

// const deleteUser = async function (id) {
//   const usuario = await usuarioRepository.findUser(id);

//   if (!usuario) {
//     return createError(404, "Usuário não encontrado");
//   }

//   await usuarioRepository.deleteUser(id);

//   return usuario;
// };

// const login = async function (usuario) {
//   const userLogin = await usuarioRepository.findUserToValidate({
//     login: usuario.login,
//   });

//   if (!userLogin) {
//     return createError(401, "Usuário inválido");
//   }

//   const comparePassword = await bcrypt.compare(usuario.senha, userLogin.senha);

//   if (!comparePassword) {
//     return createError(401, "Usuário inválido");
//   }

//   const token = sign(
//     {
//       id: userLogin.id,
//     },
//     process.env.SECRET,
//     {
//       expiresIn: "5h",
//     }
//   );

//   delete userLogin.senha;

//   return {
//     auth: true,
//     usuario: userLogin,
//     token
//   };
// };

module.exports = {
  create,
  // login,
  // listUsers,
  // findUser,
  // updateUser,
  // deleteUser,
};
