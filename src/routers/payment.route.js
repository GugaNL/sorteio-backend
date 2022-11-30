const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.post('/create-pix-payment', paymentController.paymentPix);
// router.get('/checkout/:id/:email/:description/:amount', paymentController.checkout)

// router.get('/success', (req, res) => {
//     return res.render('success_screen')
// })

// router.get('/pending', (req, res) => {
//     return res.render('pending_screen')
// })

// router.get('/failure', (req, res) => {
//     return res.render('failure_screen')
// })

module.exports = router;