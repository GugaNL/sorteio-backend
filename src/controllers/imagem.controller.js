const imagemService = require("../services/imagem.service");
const { validationResult } = require("express-validator");
const createError = require("http-errors");

const updateRemovedImages = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await imagemService.updateBySorteio(
      req.body,
      req.params.id
    );

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, imagem: response });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  updateRemovedImages,
};
