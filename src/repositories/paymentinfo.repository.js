const { PaymentInfo } = require("../database/models/index");

const create = async function (paymentInfo) {
  const paymentInfoCreated = await PaymentInfo.create(paymentInfo);
  return paymentInfoCreated;
};

const list = async function () {
  const paymentInfos = await PaymentInfo.findAll();
  return paymentInfos;
};

const find = async function () {
  const paymentInfo = await PaymentInfo.findOne();
  return paymentInfo;
};

const findWhere = async function (where) {
  const paymentInfo = await PaymentInfo.findOne();

  return paymentInfo;
};

const update = async function (paymentInfo, id) {
  await PaymentInfo.update(paymentInfo, {
    where: {
      id,
    },
  });
};

const remove = async function (id) {
  return await PaymentInfo.destroy({ where: { id } });
};

module.exports = {
  create,
  list,
  find,
  findWhere,
  update,
  remove,
};
