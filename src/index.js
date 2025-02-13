import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.mjs";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App issue : ", error);
      throw error;
    });
    app.listen(process.env.PORT , () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
