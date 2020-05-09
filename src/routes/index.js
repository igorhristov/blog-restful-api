const router = require("express").Router();
const articles = require("./articles");
const authors = require("./authors");
const tags = require("./tags");

router.use("/articles", articles);
router.use("/authors", authors);
router.use("/tags", tags);

router
  .route("/")
  .get((req, res, next) => {
    res.json({ message: "Connected!" });
  })
  .post((req, res) => {
    res.status(200).json({ status: "Success Post!", data: { body: req.body } });
  })
  .delete((req, res) => {
    res.status(200).json({ msg: "welcome to DELETE" });
  });

module.exports = router;
