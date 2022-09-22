const bilheteService = require("../services/bilhete.service");
const { validationResult } = require("express-validator");
const createError = require("http-errors");

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await bilheteService.create(req.body);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, bilhete: response });
  } catch (error) {
    return next(error);
  }
};

const list = async function (req, res, next) {
  try {
    const response = await bilheteService.list(req.body);

    res.send({ success: true, bilhetes: response });
  } catch (error) {
    return next(error);
  }
};

const listWhere = async function (req, res, next) {
  try {
    const response = await bilheteService.listWhere(req.body);

    res.send({ success: true, bilhete: response });
  } catch (error) {
    return next(error);
  }
};

const find = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await bilheteService.find(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, bilhete: response });
  } catch (error) {
    return next(error);
  }
};

const update = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await bilheteService.update(
      {
        numero: req.body.numero,
        sorteioId: req.body.sorteioId,
        comprador: req.body.comprador,
      },
      req.params.id
    );

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, bilhete: response });
  } catch (error) {
    return next(error);
  }
};

const remove = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await bilheteService.remove(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, bilhete: response });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  list,
  listWhere,
  find,
  update,
  remove,
};
