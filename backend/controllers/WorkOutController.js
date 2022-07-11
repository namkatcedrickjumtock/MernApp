import { workOutModel } from "../Models/workOutSchema.js";
import mongoose from "mongoose";

// getting all workouts
const getAllWorkOuts = async (req, res) => {
  try {
    const receivedWorkOuts = await workOutModel
      .find({})
      .sort({ createdAt: -1 });
    res.status(200).json(receivedWorkOuts);
  } catch (error) {
    res.status(400).json({ errorMsg: error.message });
  }
};

// creating new work out
const creatWorkOut = async (req, res) => {
  const { title, resp, load } = req.body;
  try {
    const SaveWork = await workOutModel.create({ title, resp, load });
    res.status(200).json(SaveWork);
  } catch (error) {
    res.status(400).json({ errorMsg: error.message });
  }
};

// get single workout
const getWorkById = async (req, res) => {
  const { id } = req.body;
  //   check id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid work out" });
  }
  const singleWorkOut = await workOutModel.findById({ id });
  if (!singleWorkOut) {
    return res.status(404).json({ error: "Work out not find" });
  }
  res.status(200).json({ singleWorkOut });
};

// deleting workout by id
const deletWorkOutById = async (req, res) => {
  const { id } = req.params;

  //   check id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid work out" });
  }
  const workOutDeleted = await workOutModel.findOneAndDelete({ _id: id });

  if (!workOutDeleted) {
    return res.status(404).json({ error: "Work out not find" });
  }
  res.status(200).json({ workOutDeleted });
};

// updating documents
const updateWorks = async (req, res) => {
  const { id } = req.params;

  //   check id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid work out" });
  }
  const workOutUpdate = await workOutModel.findByIdAndUpdate(
    { _id: id },
   { ...req.body }
  );
  if (!workOutUpdate) {
    return res.status(404).json({ error: "Work out not find" });
  }
  res.status(200).json(workOutUpdate);
};

export {
  creatWorkOut,
  getAllWorkOuts,
  getWorkById,
  updateWorks,
  deletWorkOutById,
};
