const sorteioService = require("../services/sorteio.service");
const { validationResult } = require("express-validator");
const createError = require("http-errors");

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await sorteioService.create(req.body);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, sorteio: response });
  } catch (error) {
    return next(error);
  }
};

const list = async function (req, res, next) {
  try {
    const response = await sorteioService.list(req.body);

    res.send({ success: true, sorteios: response});
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

    const response = await sorteioService.find(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, sorteio: response});
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

    const response = await sorteioService.update(req.body, req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, sorteio: response });
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

    const response = await sorteioService.remove(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, sorteio: response });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  list,
  find,
  update,
  remove
};
