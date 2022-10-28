const express = require("express");
const router = express.Router();
const paymentInfoController = require("../controllers/paymentinfo.controller");
const { verifyJWT } = require("../middlewares/authorizator");

router.post("/novo", verifyJWT, paymentInfoController.create);
router.get("/lista", paymentInfoController.list);
router.get("/busca", paymentInfoController.find);
router.put("/:id", verifyJWT,  paymentInfoController.update);
router.delete("/:id", verifyJWT, paymentInfoController.remove);

module.exports = router;
