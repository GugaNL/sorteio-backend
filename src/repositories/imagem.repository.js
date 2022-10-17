const { Imagem } = require("../database/models/index");
const fs = require("fs");

const create = async function (imagens = [], sorteioId = 0) {
  if (imagens.length > 0) {
    for (let i = 0; i < imagens.length; i++) {
      await Imagem.create({
        //filename: imagens[i]?.filename,
        filename: imagens[i]?.key,
        mimetype: imagens[i]?.mimetype,
        path: imagens[i]?.location,
        //path: imagens[i]?.path,
        sorteioId,
      });
    }
  }

  return true;
};

const listWhere = async function (sorteioId) {
  const imagens = await Imagem.findAll({
    where: {
      sorteioId,
    },
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

const updateBySorteio = async function (imagens, sorteioId) {
  await Imagem.update(imagens, {
    where: {
      sorteioId,
    },
  });
};

const removeBySorteio = async function (sorteioId) {
  return await Imagem.destroy({ where: { sorteioId } });
};

const removeByIds = async function (imagesToRemove) {
  for (let i = 0; i < imagesToRemove.length; i++) {
    await Imagem.destroy({ where: { id: imagesToRemove[i]?.id } });

    const filePath = imagesToRemove[i]?.path.replace(/\\/g, "/");
    fs.unlink(filePath, (err) => {
      if (err) {
        return;
      }
    });
  }

  return true;
};

module.exports = {
  create,
  listWhere,
  find,
  update,
  updateBySorteio,
  removeBySorteio,
  removeByIds,
};
