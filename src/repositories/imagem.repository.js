const { Imagem } = require("../database/models/index");

const create = async function (imagens = [], sorteioId = 0) {
  if (imagens.length > 0) {
    for (let i = 0; i < imagens.length; i++) {
      await Imagem.create({
        filename: imagens[i]?.filename,
        mimetype: imagens[i]?.mimetype,
        path: imagens[i]?.path,
        sorteioId,
      });
    }
  }

  return true;
};

const listWhere = async function (where) {
  const imagens = await Imagem.findAll({
    where,
  });

  return imagens;
};

const find = async function (id) {
  const imagem = await Imagem.findByPk(id);
  return imagem;
};

const update = async function (imagens, id) {
  await Imagem.update(imagens, {
    where: {
      id,
    },
  });
};

const removeBySorteio = async function (sorteioId) {
  return await Imagem.destroy({ where: { sorteioId } });
};

module.exports = {
  create,
  listWhere,
  find,
  update,
  removeBySorteio,
};
