const sorteioService = require("../services/sorteio.service");
const imagemService = require("../services/imagem.service");
const { validationResult } = require("express-validator");
const createError = require("http-errors");
var multer = require("multer");

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    if (req.files && req.files.length > 0) {
      const { files = [] } = req;
      req.body.imagens = files;
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

    res.send({ success: true, sorteios: response });
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

    const responseSorteio = await sorteioService.find(req.params.id);

    if (responseSorteio && responseSorteio.message) {
      throw responseSorteio;
    }

    const responseImagem = await imagemService.listWhere(req.params.id);

    res.send({ success: true, sorteio: responseSorteio, imagens: responseImagem });
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

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log(req);
    callback(null, "./resources/uploads");
  },
  filename: (req, file, callback) => {
    console.log(req);
    // const mimeExtension = {
    //   "image/jpeg": ".jpeg",
    //   "image/jpg": ".jpg",
    //   "image/png": ".png",
    // };
    callback(
      null,
      Date.now() + '-' + file.originalname
      //file.originalname + "-" + Date.now() + mimeExtension[file.mimeType]
    );
  },
});

var uploadImage = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
      req.fileError = 'Formato não válido'
    }
  },
});



module.exports = {
  create,
  list,
  find,
  update,
  remove,
  uploadImage
};
