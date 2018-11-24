const resultRoutes = require("./result");
const express = require("express");
const router = express.Router();

const constructorMethod = app => {
  app.use("/result", resultRoutes);

  app.use("/", (req, res) => {
    res.render("palin/new", {title: "The Best Palindrome Checker in the World!"});
  });

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
