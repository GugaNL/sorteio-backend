const { Cliente } = require("../database/models/index");

const create = async function (cliente) {
  const clienteCriado = await Cliente.create(cliente);
  return clienteCriado;
};

const list = async function () {
  const clientes = await Cliente.findAll();
  return clientes;
};

const find = async function (id) {
  const cliente = await Cliente.findByPk(id);
  return cliente;
};

const findWhere = async function (where) {
  const cliente = await Cliente.findOne({
    where,
  });

  return cliente;
};

const update = async function (cliente, id) {
  await Cliente.update(cliente, {
    where: {
      id,
    },
  });
};

const remove = async function (id) {
  return await Cliente.destroy({ where: { id } });
};

module.exports = {
  create,
  list,
  find,
  findWhere,
  update,
  remove,
};
