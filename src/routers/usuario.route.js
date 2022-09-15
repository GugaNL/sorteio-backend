const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
//const { verifyJWT } = require("../middlewares/authorizator");
//const usuarioValidator = require("../validators/usuario.validator");

router.post("/novo", usuarioController.create);
// router.post("/novo", usuarioValidator.create(), usuarioController.create);
// router.post("/login", usuarioValidator.login(), usuarioController.login);
// router.get("/lista", verifyJWT, usuarioController.listUsers);
// router.get("/:id", verifyJWT, usuarioValidator.findById(), usuarioController.findUser);
// router.put("/:id", verifyJWT, usuarioValidator.updateUser(), usuarioController.updateUser);
// router.delete("/:id", verifyJWT, usuarioValidator.deleteUser(), usuarioController.deleteUser);


module.exports = router;
