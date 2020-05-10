const express = require('express');
const app = express();
const routes = require('./src/routes');

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next()
}

// init middleware
app.use(logger)

app.use(express.json());
app.use('/', routes);

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
