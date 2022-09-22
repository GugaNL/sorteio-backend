const express = require("express");
const router = express.Router();
const bilheteController = require("../controllers/bilhete.controller");
const { verifyJWT } = require("../middlewares/authorizator");
const usuarioValidator = require("../validators/usuario.validator");

router.post("/novo", bilheteController.create);
router.get("/lista", verifyJWT, bilheteController.list);
router.get("/listaWhere", bilheteController.listWhere);
router.get("/:id", usuarioValidator.findById(), bilheteController.find);


router.put("/:id", verifyJWT, bilheteController.update);
router.delete("/:id", verifyJWT, bilheteController.remove);


module.exports = router;
