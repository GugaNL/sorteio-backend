const clienteRepository = require("../repositories/cliente.repository");
const createError = require("http-errors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const create = async function (cliente) {
  const clienteExists = await clienteRepository.findWhere({
    email: cliente.email,
  });

  if (clienteExists) {
    return createError(409, "Essa conta já existe");
  }

  cliente.senha = await bcrypt.hash(cliente.senha, ~~process.env.SALT);
  const clienteCriado = await clienteRepository.create(cliente);
  return clienteCriado;
};

const login = async function (cliente) {
  const clienteLogin = await clienteRepository.findWhere({
    email: cliente.email,
  });

  if (!clienteLogin) {
    return createError(401, "Cliente não encontrado");
  }

  const comparePassword = await bcrypt.compare(cliente.senha, clienteLogin.senha);

  if (!comparePassword) {
    return createError(401, "Dado(s) inválido(s)");
  }

  const token = sign(
    {
      id: clienteLogin.id,
    },
    process.env.CLIENT_SECRET,
    {
      expiresIn: "5h",
    }
  );

  delete clienteLogin.senha;

  return {
    auth: true,
    cliente: clienteLogin,
    token
  };
};

const list = async function () {
  const clientes = await clienteRepository.list();
  return clientes;
};

const find = async function (id) {
  const cliente = await clienteRepository.find(id);

  if (!cliente) {
    return createError(404, "Cliente não encontrado");
  }

  return cliente;
};

const update = async function (cliente, id) {
  const clienteExists = await clienteRepository.find(id);

  if (!clienteExists) {
    return createError(404, "Cliente não existe");
  }

  await clienteRepository.update(cliente, id);

  return await clienteRepository.find(id);
};

const remove = async function (id) {
  const cliente = await clienteRepository.find(id);

  if (!cliente) {
    return createError(404, "Cliente não encontrado");
  }

  await clienteRepository.remove(id);

  return cliente;
};

module.exports = {
  create,
  login,
  list,
  find,
  update,
  remove,
};
