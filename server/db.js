const mongoose = require("mongoose");

//connecting to the localhost database
const mongoURI =
  "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected Successfully");
  });
};

module.exports = connectToMongo;