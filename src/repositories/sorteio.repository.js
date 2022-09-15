const { Sorteio } = require("../database/models/index");
const { Bilhete } = require("../database/models/index");
const bilheteRepository = require("./bilhete.repository");
const db = require("../database/models/index");

const create = async function (sorteio) {
  const sorteioCriado = await Sorteio.create(sorteio);
  return sorteioCriado;
  //const t = await db.sequelize.transaction();
  //const bilhetesTotal = sorteio.totalBilhetes;

  // try {
  //   const sorteioCriado = await Sorteio.create(sorteio, { transaction: t });

  //   for (let i = 1; i < bilhetesTotal + 1; i++) {
  //     await Bilhete.create({
  //       numero: i,
  //       sorteioId: sorteioCriado.id,
  //       comprador: null,
  //     });
  //   }

  //   await t.commit();
  //   return sorteioCriado;
  // } catch (error) {
  //   await t.rollback();
  // }
};

const list = async function () {
  const sorteios = await Sorteio.findAll();
  return sorteios;
};

const listWhere = async function (where) {
  const sorteios = await Sorteio.findAll({
    where,
  });

  return sorteios;
};

const find = async function (id) {
  const sorteio = await Sorteio.findByPk(id);
  return sorteio;
};

const findWhere = async function (where) {
  const sorteio = await Sorteio.findOne({
    where,
  });

  return sorteio;
};

const update = async function (sorteio, id) {
  await Sorteio.update(sorteio, {
    where: {
      id,
    },
  });
};

// const remove = async function (id) {
//   const t = await db.sequelize.transaction();

//   try {
//     const bilhetesExists = await bilheteRepository.listWhere({
//       sorteioId: id,
//     });

//     if (bilhetesExists) {
//       await bilheteRepository.removeBySorteio(id);
//     }

//     await Sorteio.destroy({ where: { id } }, { transaction: t });

//     await t.commit();
//   } catch (error) {
//     await t.rollback();
//   }
// };

const remove = async function (id) {
  return await Sorteio.destroy({ where: { id } });
};

module.exports = {
  create,
  list,
  listWhere,
  find,
  findWhere,
  update,
  remove,
};
