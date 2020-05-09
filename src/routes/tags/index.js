const router = require('express').Router();
const tags = require('./tags');
const slug = require('./slug');
// const updateSlug = require('./updateSlug');
const slugArticles = require('./slugArticles');

router
  .route('/')
  .get(tags)

router
  .route('/:slug')
  .get(slug)
  // .post(updateSlug)

router
  .route('/:slug/articles')
  .get(slugArticles)

module.exports = router;
