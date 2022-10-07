const imagemRepository = require("../repositories/imagem.repository");

const listWhere = async function (id) {
  const bilhetesExists = await imagemRepository.listWhere(id) || [];

  return bilhetesExists;
};

module.exports = {
  listWhere,
};
