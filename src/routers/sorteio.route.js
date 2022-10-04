const express = require("express");
const router = express.Router();
const sorteioController = require("../controllers/sorteio.controller");
const { verifyJWT } = require("../middlewares/authorizator");
const usuarioValidator = require("../validators/usuario.validator");

router.post("/novo", sorteioController.uploadImage.single('sorteioImage'), sorteioController.create);
router.get("/lista", sorteioController.list);
router.get("/:id", usuarioValidator.findById(), sorteioController.find);
router.put("/:id", verifyJWT, sorteioController.update);
router.delete("/:id", verifyJWT, sorteioController.remove);


module.exports = router;
