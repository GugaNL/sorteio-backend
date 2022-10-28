const paymentInfoRepository = require("../repositories/paymentinfo.repository");
const createError = require("http-errors");
require("dotenv").config();

const create = async function (paymentInfo) {
  const paymentInfoCreated = await paymentInfoRepository.create(paymentInfo);
  return paymentInfoCreated;
};

const list = async function () {
  const paymentInfos = await paymentInfoRepository.list();
  return paymentInfos;
};

const find = async function () {
  const paymentInfo = await paymentInfoRepository.find();

  if (!paymentInfo) {
    return createError(404, "Informações de pagamento não encontrados");
  }

  return paymentInfo;
};

const update = async function (paymentInfo, id) {
  const paymentInfoExists = await paymentInfoRepository.find(id);

  if (!paymentInfoExists) {
    return createError(404, "Informações de pagamento não existem");
  }

  await paymentInfoRepository.update(paymentInfo, id);

  return await paymentInfoRepository.find(id);
};

const remove = async function (id) {
  const paymentInfo = await paymentInfoRepository.find(id);

  if (!paymentInfo) {
    return createError(404, "Informações de pagamento não encontrados");
  }

  await paymentInfoRepository.remove(id);

  return paymentInfo;
};

module.exports = {
  create,
  list,
  find,
  update,
  remove,
};
