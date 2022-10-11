const express = require("express");
const router = express.Router();
const sorteioController = require("../controllers/sorteio.controller");
const { verifyJWT } = require("../middlewares/authorizator");
const usuarioValidator = require("../validators/usuario.validator");

router.post("/novo", sorteioController.uploadImage.array('sorteioImage', 10), sorteioController.create);
router.get("/lista", sorteioController.list);
router.get("/:id", usuarioValidator.findById(), sorteioController.find);
router.put("/:id", verifyJWT, sorteioController.uploadImage.array('sorteioImage', 10), sorteioController.update);
router.delete("/:id", verifyJWT, sorteioController.remove);


module.exports = router;
