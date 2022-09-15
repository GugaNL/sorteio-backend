const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.controller");
const { verifyJWT } = require("../middlewares/authorizator");
const clienteValidator = require("../validators/cliente.validator");

router.post("/novo", clienteController.create);
router.post("/login", clienteValidator.login(), clienteController.login);
router.get("/lista", verifyJWT, clienteController.list);
//router.get("/list:id", clienteController.listWhere);
router.get("/:id", clienteValidator.findById(), clienteController.find);
router.put("/:id", clienteController.update);
router.delete("/:id", verifyJWT, clienteController.remove);

module.exports = router;
