const MercadoPago = require("mercadopago");

const createPixPayment = async function (order) {
  MercadoPago.configure({
    sandbox: process.env.SANDBOX,
    access_token: process.env.MP_ACCESS_TOKEN,
  });

  try {
    const response = await MercadoPago.payment.create(order);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createPixPayment,
};
