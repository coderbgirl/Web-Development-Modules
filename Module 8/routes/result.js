const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {

  var resultString = "";
  var result = "failure";

  if (!req.body || !req.body.text || req.body.text.length === 0) {
    res.render("palin/result", {
      title: "The Palindrome Results!",
      resultstring: resultString,
      text: "No input text provided!",
      resulttype: result
    });
    return;
  }

  if (!req.body.text.replace(/[^a-zA-Z0-9]/g, '') || req.body.text.replace(/[^a-zA-Z0-9]/g, '') === "" || req.body.text.replace(/[^a-zA-Z0-9]/g, '').length === 0) {
    res.render("palin/result", {
      title: "The Palindrome Results!",
      resultstring: resultString,
      text: "Input contains no letters or numbers",
      resulttype: result
    });
    return;
  }

  var checkText = req.body.text;

  checkText = checkText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverseText = checkText.split("").reverse().join("");

  if (checkText === reverseText) {
    resultString = "String is palidrome";
    result = "success";
  }
  else {
    resultString = "String is not palidrome";
    result = "failure";
  }
  res.render("palin/result", {
    title: "The Palindrome Results!",
    resultstring: resultString,
    text: req.body.text,
    resulttype: result
  });
});

router.post("*", async (req, res) => {

  res.sendStatus(404);

});

module.exports = router;
