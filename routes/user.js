const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl,isLoggedIn } = require("../middleware.js");
const userController  = require("../controllers/users.js");

//signup
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup))

//login
router.route("/login")
.get(userController.renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

//logout
router.get("/logout", userController.logout);

//profile
router.get("/profile", isLoggedIn, userController.renderProfile);

//settings
router.route("/settings")
  .get(isLoggedIn, userController.renderSettingsForm)
  .post(isLoggedIn, wrapAsync(userController.userSetting));


module.exports = router;
