const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = 3000;

const path = require('path');
app.use(express.json());
app.use(cors());

require('./models/db');

// Import routes
const routes = require('./routes/index'); // index contains all the routes

// Use routes
app.use(routes);
console.log(process.env.BASE_URL);

// SSL/TLS certificate and private key paths
const privateKey = fs.readFileSync('/etc/letsencrypt/live/abhardwaj.wmdd4950.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/abhardwaj.wmdd4950.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/abhardwaj.wmdd4950.com/chain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

// Create an HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the HTTPS server
httpsServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


