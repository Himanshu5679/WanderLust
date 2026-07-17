const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
}

module.exports.signup = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registerUser = await User.register(newUser, password);
      // console.log(registerUser);
      req.login(registerUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Successfull register user");
        res.redirect("/listings");
      });
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  }

  module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
}


  module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }

  module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logout!");
    res.redirect("/listings");
  });
}

module.exports.renderProfile = (req, res) => {
  res.render("users/profile.ejs", { user: req.user });
};

module.exports.renderSettingsForm = (req, res) => {
  res.render("users/settings.ejs", { user: req.user });
};

module.exports.userSetting = async (req, res) => {
    let { username, email } = req.body;
    let user = await User.findByIdAndUpdate(req.user._id, { username, email });
    req.flash("success", "Profile updated successfully!");
    res.redirect("/profile");
};// 