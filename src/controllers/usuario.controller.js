// const usuarioService = require("../services/usuario.service");
const { validationResult } = require("express-validator");
const createError = require("http-errors");

const create = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    // const response = await usuarioService.create(req.body);

    // if (response && response.message) {
    //   throw response;
    // }

    // res.send(response);
  } catch (error) {
    return next(error);
  }
};

// const create = async function (req, res, next) {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw createError(422, { errors: errors.array() });
//     }

//     const response = await usuarioService.create(req.body);

//     if (response && response.message) {
//       throw response;
//     }

//     res.send(response);
//   } catch (error) {
//     return next(error);
//   }
// };

// const login = async function (req, res, next) {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw createError(422, { errors: errors.array() });
//     }

//     const response = await usuarioService.login(req.body);

//     if (response && response.message) {
//       throw response;
//     }

//     res.send(response);
//   } catch (error) {
//     return next(error);
//   }
// };

// const listUsers = async function (req, res, next) {
//   try {
//     const response = await usuarioService.listUsers(req.body);

//     res.send(response);
//   } catch (error) {
//     return next(error);
//   }
// };

// const findUser = async function (req, res, next) {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw createError(422, { errors: errors.array() });
//     }

//     const response = await usuarioService.findUser(req.params.id);

//     if (response && response.message) {
//       throw response;
//     }

//     res.send(response);
//   } catch (error) {
//     return next(error);
//   }
// };

// const updateUser = async function (req, res, next) {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw createError(422, { errors: errors.array() });
//     }

//     const response = await usuarioService.updateUser(
//       {
//         senha: req.body.senha,
//       },
//       req.params.id
//     );

//     if (response && response.message) {
//       throw response;
//     }

//     res.send(response);
//   } catch (error) {
//     return next(error);
//   }
// };

// const deleteUser = async function (req, res, next) {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw createError(422, { errors: errors.array() });
//     }

//     const response = await usuarioService.deleteUser(req.params.id);

//     if (response && response.message) {
//       throw response;
//     }

//     res.send(response);
//   } catch (error) {
//     return next(error);
//   }
// };

module.exports = {
  create,
  // login,
  // listUsers,
  // findUser,
  // updateUser,
  // deleteUser,
};
