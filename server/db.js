const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://skillbridge:skillbridge@skillbridge-development.7ydtqsx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

// Function to get the reference to the MongoDB client object
function getMongoClient() {
  return client;
}

module.exports = { connectToDatabase, getMongoClient };
