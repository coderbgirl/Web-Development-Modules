const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const story = {
      "storyTitle": "My Journey from Electronics to Computer Science",
      "story": "It was my junior year in college while pursuing my Bachelors in Electronics Engineering. I took a course called Object Oriented Programming, which was my first real exposure to high level programming. The course was a breeze for me as the lecturers taught really well and made it fun. This made me quite interested in the workings of modern programming frameworks and the Java language.\nI loved how programming felt like a puzzle and I enjoyed the problem solving aspect of it. The creativity it took to craft code was a really interesting experience for me. I wanted a deeper look at the theories behind the technology we use every day. I also wanted to keep getting my hands dirty with code and exploring how technology is made. Because of these reasons, I always thought if only I had majored in Computer Science.\nIf you are like me, who likes stories that have a happy ending, then this story is no different. After a long wait, I finally got the opportunity to pursue a graduate program in Computer Science at the top school of my choice - Stevens!"
    };
    res.json(story);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  res.status(501).send();
});

module.exports = router;
