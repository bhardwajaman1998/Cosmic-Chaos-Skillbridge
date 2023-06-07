const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 8000');
});
