const paymentService = require("../services/payment.service");

const paymentPix = async function (req, res) {
  try {
    const response = await paymentService.createPixPayment(req.body);

    if (response && response.message) {
      return res.status(400).send({ success: false, message: response.message });
    }

    res.send({ success: true, payment: response });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  paymentPix,
};
