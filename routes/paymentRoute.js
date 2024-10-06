const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  processPayment,
  sendStripeApikey,
} = require("../controllers/paymentController");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApikey);
module.exports = router;
