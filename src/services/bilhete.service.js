const bilheteRepository = require("../repositories/bilhete.repository");
const sorteioRepository = require("../repositories/sorteio.repository");
const clienteRepository = require("../repositories/cliente.repository");

const createError = require("http-errors");

const create = async function (bilhete) {
  const sorteioExists = await sorteioRepository.find(bilhete.sorteioId);

  if (!sorteioExists) {
    return createError(409, "Sorteio não encontrado");
  }

  const bilheteExists = await bilheteRepository.findWhere({
    numero: bilhete.numero,
    sorteioId: bilhete.sorteioId
  })

  if (bilheteExists) {
    return createError(409, "Bilhete já comprado");
  }

  const clienteExists = await clienteRepository.find(bilhete.comprador);

  if (!clienteExists) {
    return createError(409, "Comprador não encontrado");
  }

  const bilheteCriado = await bilheteRepository.create(bilhete);
  return bilheteCriado;
};

const list = async function () {
  const bilhetes = await bilheteRepository.list();
  return bilhetes;
};

const listWhere = async function (sorteioId) {
  const sorteioExists = await sorteioRepository.find({
    id: sorteioId,
  });

  if (!sorteioExists) {
    return createError(409, "Sorteio não encontrado");
  }

  const bilhetes = await bilheteRepository.listWhere(sorteioId);
  return bilhetes;
};

const find = async function (id) {
  const bilhete = await bilheteRepository.find(id);

  if (!bilhete) {
    return createError(404, "Bilhete não encontrado");
  }

  return bilhete;
};

const update = async function (bilhete, id) {
  const bilheteExists = await bilheteRepository.find(id);

  if (!bilheteExists) {
    return createError(404, "Bilhete não encontrado");
  }

  await bilheteRepository.update(bilhete, id);

  return await bilheteRepository.find(id);
};

const remove = async function (id) {
  const bilhete = await bilheteRepository.find(id);

  if (!bilhete) {
    return createError(404, "Bilhete não encontrado");
  }

  await bilheteRepository.remove(id);

  return bilhete;
};

module.exports = {
  create,
  list,
  listWhere,
  find,
  update,
  remove,
};
