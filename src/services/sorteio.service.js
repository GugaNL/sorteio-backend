const sorteioRepository = require("../repositories/sorteio.repository");
const bilheteRepository = require("../repositories/bilhete.repository");
const imagemRepository = require("../repositories/imagem.repository");
require("dotenv").config();
const createError = require("http-errors");
const fs = require("fs");

const create = async function (sorteio) {
  if (!sorteio.status) {
    sorteio.status = "ativo";
  }
  sorteio.bilhetesVendidos = 0;

  const arrayImagens = sorteio.imagens || [];

  sorteio.mainImage = arrayImagens.length > 0 ? arrayImagens[0]?.location : "";

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

  const imagesUrls = await imagemRepository.listWhere(id);

  if (imagesUrls && imagesUrls.length > 0) {
    sorteio.mainImage = imagesUrls[0]?.path || "";
  } else {
    sorteio.mainImage = "";
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

  const imagesToRemove = await imagemRepository.listWhere(id);

  if (imagesToRemove && imagesToRemove.length > 0) {
    for (let i = 0; i < imagesToRemove.length; i++) {
      const filePath = imagesToRemove[i]?.path.replace(/\\/g, "/");
      fs.unlink(filePath, (err) => {
        if (err) {
          return;
        }
      });
    }
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
