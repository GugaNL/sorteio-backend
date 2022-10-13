const express = require("express");
const router = express.Router();
const imagemController = require("../controllers/imagem.controller");
const { verifyJWT } = require("../middlewares/authorizator");

router.post("/:id", verifyJWT, imagemController.updateRemovedImages);

module.exports = router;
