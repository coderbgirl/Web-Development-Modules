const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const about = {
      "name": "Bhumika Patoliya",
      "cwid": "10432870",
      "biography": "I am a student of Computer Science at Stevens Institute of Technology. I live in New Jersey with my family and I have travelled to many parts of the US.\nI love the weather of California, the Mexican food of Texas, the beaches of Florida, the grandeur of New York and the warm sense of home of New Jersey. When I am not working or travelling, there is a good chance you will find me watching Netflix.",
      "favoriteShows": ["The Game of Thrones", "Prison Break", "Breaking Bad", "Friends"],
      "hobbies": ["Cooking", "Watching movies", "Travelling"]
    };
    res.json(about);
  } catch (e) {
    res.status(404).json({message: "Resource Not Found!" });
  }
});

router.post("/", async (req, res) => {
  res.status(501).send();
});

module.exports = router;
