const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const education = {
      school1: {
        "schoolName": "Little Flowers",
        "degree": "Primary Schooling",
        "favoriteClass": "Science",
        "favoriteMemory": "Awarded the 1st prize in 400 meter race at state level."
      },
      school2: {
        "schoolName": "Panchsheel Vidhyalaya",
        "degree": "High School",
        "favoriteClass": "Math",
        "favoriteMemory": "Secured 91% in my board exam and I got admission in my dream college."
      },
      school3: {
        "schoolName": "SVIT Vasad",
        "degree": "Bachelors",
        "favoriteClass": "Object Oriented Programming",
        "favoriteMemory": "Met people in my Signal Processing lab who are my best friends for life."
      }
    };
    res.json(education);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  res.status(501).send();
});

module.exports = router;