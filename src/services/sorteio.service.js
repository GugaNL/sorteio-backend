const sorteioRepository = require("../repositories/sorteio.repository");
const bilheteRepository = require("../repositories/bilhete.repository");
require("dotenv").config();
const createError = require("http-errors");
const fs = require("fs");

const create = async function (sorteio) {
  if (!sorteio.status) {
    sorteio.status = "ativo";
  }
  sorteio.bilhetesVendidos = 0;

  const arrayImagens = sorteio.imagens || [];

  delete sorteio.imagens;

  const sorteioCriado = await sorteioRepository.create(sorteio, arrayImagens);
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
  const sorteio = await sorteioRepository.find(id);

  if (!sorteio) {
    return createError(404, "Sorteio não encontrado");
  }

  return sorteio;
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

  if (sorteio.foto) {
    const filePath = sorteio?.foto.replace(/\\/g, "/");
    fs.unlink(filePath, (err) => {
      if (err) {
        return;
      }
    });
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
  remove,
};
