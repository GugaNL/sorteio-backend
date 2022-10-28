const paymentInfoService = require("../services/paymentinfo.service");
const { validationResult } = require("express-validator");
const createError = require("http-errors");

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await paymentInfoService.create(req.body);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, paymentInfo: response });
  } catch (error) {
    return next(error);
  }
};

const list = async function (req, res, next) {
  try {
    const response = await paymentInfoService.list(req.body);

    res.send({ success: true, paymentInfos: response });
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

    const response = await paymentInfoService.find();

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, paymentInfo: response });
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

    const response = await paymentInfoService.update(req.body, req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, paymentInfo: response });
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

    const response = await paymentInfoService.remove(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({ success: true, paymentInfo: response });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  list,
  find,
  update,
  remove,
};
