const { readJsonFile } = require("../../utilities.js");

module.exports = async (req, res) => {
  const authors = await readJsonFile("authors.json");

  const { authorId } = req.params;
  const author = authors.find(({ id }) => id === authorId);

  if (!author) {
    return res.status(404).send("The author with given ID was not found!");
  }

  const articles = await readJsonFile("articles.json");

  res.json(articles.filter(article => article.authorId === authorId));
};
