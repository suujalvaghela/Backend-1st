import dotenv from "dotenv";
import express from "express";

const app = express();

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App issue : ", error);
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`server is listening on the port of ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongo db connection failed : ", err);
    throw err;
  });
