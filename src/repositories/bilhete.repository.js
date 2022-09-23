const { Bilhete } = require("../database/models/index");

const create = async function (bilhete) {
  const bilheteCriado = await Bilhete.create(bilhete);
  return bilheteCriado;
};

const list = async function () {
  const bilhetes = await Bilhete.findAll();
  return bilhetes;
};

const listWhere = async function (where, page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const bilhetes = await Bilhete.findAll({
    where,
    offset: skip,
    limit
  });

  return bilhetes;
};

const find = async function (id) {
  const bilhete = await Bilhete.findByPk(id);
  return bilhete;
};

// const findWhere = async function (where) {
//   const bilhete = await Bilhete.findOne({
//     where,
//   });

//   return bilhete;
// };

const findWhere = async function (bilhete) {
  const bilheteEncontrado = await Bilhete.findOne({
    where: {
      numero: bilhete.numero,
      sorteioId: bilhete.sorteioId
    },
  });

  return bilheteEncontrado;
};

const update = async function (bilhete, id) {
  await Bilhete.update(bilhete, {
    where: {
      id,
    },
  });
};

const remove = async function (id) {
  return await Bilhete.destroy({ where: { id } });
};

const removeBySorteio = async function (sorteioId) {
  return await Bilhete.destroy({ where: { sorteioId } });
};

module.exports = {
  create,
  list,
  listWhere,
  find,
  findWhere,
  update,
  remove,
  removeBySorteio
};
