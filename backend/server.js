import express from "express";
import "dotenv/config";
import { routes } from "./routes/workoutsRoutes.js";
import morgan from "morgan";
import mongoose from "mongoose";
import { workOutModel } from "./Models/workOutSchema.js";

// initializing the express app
const app = express();

// parsing url req to get acces to the body using a middleware in express
app.use(express.json());


// http logger
app.use(morgan("tiny"));
// connecting to database

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to Database & port:`, process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// using work out routes with scope
app.use("/api/workouts", routes);
