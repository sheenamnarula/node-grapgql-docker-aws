/*
 * @file: user.js
 * @description: Database configuration.
 * @date: 20.7.2018
 * @author:sheenam
 * */

import Mongoose from "mongoose";
import Bluebird from "bluebird";

// Connect to MongoDB

export default async () => {
  // Build the connection string.

  //   const mongoUrl = db.auth
  //     ? `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.name}`
  //     : `mongodb://${db.host}:${db.port}/${db.name}`;
  let mongooseOptions = {
    useMongoClient: true,
    autoIndex: true, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

  // const mongoUrl = `mongodb://mongo:27017/expGraphqlDemo`;
  const mongoUrl = process.env.DB_URI;
  console.log("mongo url ==>", mongoUrl);
  Mongoose.Promise = Bluebird;

  Mongoose.connect(mongoUrl, { useNewUrlParser: true }, err => {
    if (err) {
      console.log("db errorrr", err);
      // process.exit(1);
    } else {
      console.log("mongo connected+++++++++++");
    }
  });
};
