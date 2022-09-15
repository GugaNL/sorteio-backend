const sorteioRepository = require("../repositories/sorteio.repository");
const bilheteRepository = require("../repositories/bilhete.repository")
require("dotenv").config();
const createError = require("http-errors");

const create = async function (sorteio) {
  const sorteioCriado = await sorteioRepository.create(sorteio);
  return sorteioCriado;
};

const list = async function () {
  const sorteios = await sorteioRepository.list();
  return sorteios;
};

const listWhere = async function (id, where) {
  const sorteioExists = await sorteioRepository.find(id);

  if (!sorteioExists) {
    return createError(409, "Sorteio não encontrado");
  }

  const sorteios = await sorteioRepository.listWhere(where);
  return sorteios;
};

const find = async function (id) {
  const bilhete = await sorteioRepository.find(id);

  if (!bilhete) {
    return createError(404, "Sorteio não encontrado");
  }

  return bilhete;
};

const update = async function (sorteio, id) {
  const sorteioxists = await sorteioRepository.find(id);

  if (!sorteioxists) {
    return createError(404, "Sorteio não encontrado");
  }

  await sorteioRepository.update(sorteio, id);

  return await sorteioRepository.find(id);
};

const remove = async function (id) {
  const sorteio = await sorteioRepository.find(id);

  if (!sorteio) {
    return createError(404, "Sorteio não encontrado");
  }

  const bilhetesExists = await bilheteRepository.listWhere({
    sorteioId: id,
  });

  if (bilhetesExists) {
    await bilheteRepository.removeBySorteio(id);
  }

  await sorteioRepository.remove(id);

  return sorteio;
};

module.exports = {
  create,
  list,
  listWhere,
  find,
  update,
  remove
};
