const { Usuario } = require("../database/models/index");

const create = async function (usuario) {
  const usuarioCriado = await Usuario.create(usuario);
  return usuarioCriado;
};

// const listUsers = async function () {
//   const usuarios = await Usuario.findAll();
//   return usuarios;
// };

// const findUser = async function (id) {
//   const usuario = await Usuario.findByPk(id);
//   return usuario;
// };

// const findUserToValidate = async function (where) {
//   const usuario = await Usuario.findOne({
//     where,
//   });

//   return usuario;
// };

// const updateUser = async function (usuario, id) {
//   await Usuario.update(usuario, {
//     where: {
//       id,
//     },
//   });
// };

// const deleteUser = async function (id) {
//   return await Usuario.destroy({ where: { id } });
// };

module.exports = {
  create,
  // listUsers,
  // findUser,
  // findUserToValidate,
  // updateUser,
  // deleteUser
};
