const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
require('dotenv').config();

const path = require('path');
app.use(express.json())
app.use(cors());

require('./models/db');

//import routes
const routes = require('./routes/index') // index contains all the routes

//use routes
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
