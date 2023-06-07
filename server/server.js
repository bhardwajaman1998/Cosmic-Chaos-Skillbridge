const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection setup
const uri = "mongodb+srv://skillbridge:skillbridge@skillbridge-development.7ydtqsx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    // Connect to MongoDB
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

connectToMongoDB();

// Define your Express.js routes and other server logic here...
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
