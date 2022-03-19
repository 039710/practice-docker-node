// import mongo client
var mongo = require("mongodb").MongoClient;
// import mongoose

const connectDB = async () => {
  // connect to mongo

  const client = await mongo.connect("mongodb://mongo:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const disconnectDB = async () => {
  // disconnect from mongo
  await mongo.disconnect();
};

module.exports = {
  connectDB,
  disconnectDB,
};
