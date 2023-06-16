const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

require('./models/db');

//import routes
const routes = require('./routes/index') // index contains all the routes

//use routes
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
