const imagemRepository = require("../repositories/imagem.repository");

const create = async function (imagens = [], sorteioId) {
  const imagensCriadas = await imagemRepository.create(imagens, sorteioId);
  return imagensCriadas;
};

const listWhere = async function (id) {
  const imagensExists = await imagemRepository.listWhere(id) || [];

  return imagensExists;
};

const updateBySorteio = async function (imagens, sorteioId) {
  const imagemExists = await imagemRepository.listWhere(sorteioId);

  if (imagemExists.length < 1) {
    return;
  }

  const imagesToRemove = imagemExists.filter(im => {
    return !imagens.includes(im.path);
  }) || [];

  if (imagesToRemove.length > 0) {
    await imagemRepository.removeByIds(imagesToRemove);
  }

  return await imagemRepository.find(sorteioId);
};

module.exports = {
  create,
  listWhere,
  updateBySorteio
};
