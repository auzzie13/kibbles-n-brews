var path = require("path");
var isAuthenticated = require("../kibbles/config/isauthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.render("login", null);
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.render("login", null);
  });

  app.get("/index", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname+"client/build/index.html"));
  });

  app.get("/hosting", isAuthenticated, function (req, res) {
    data = {
      email: req.user.email,
      id: req.user.id
    };
    res.render("hosting", { userdata: data });
  });

  app.get("/finder", isAuthenticated, function (req, res) {
    data = {
      email: req.user.email,
      id: req.user.id
    };
    res.render("finder", { userdata: data });
  });

  app.get("/signup", function (req, res) {
    res.render("signup", null);
  });

  app.get("/contact", function (req, res) {
    data = {
      email: req.user.email,
      id: req.user.id
    };
    res.render("contact", { userdata: data });
  });
};