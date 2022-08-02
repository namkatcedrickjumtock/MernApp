import { Router } from "express";
import {
  creatWorkOut,
  deletWorkOutById,
  getAllWorkOuts,
  getWorkById,
  updateWorks,
} from "../controllers/WorkOutController.js";

const routes = Router();

// get all workouts
routes.get("/", getAllWorkOuts);

// getting single work outs
routes.get("/:id", getWorkById);

// post  work out
routes.post("/", creatWorkOut);

// deleting  a simple work out
routes.delete("/:id", deletWorkOutById);

// updating request
routes.patch("/:id", updateWorks);

export { routes };
