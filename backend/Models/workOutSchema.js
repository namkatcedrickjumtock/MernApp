import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    resp: {
      type: Number,
      require: true,
    },
    load: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export const workOutModel = mongoose.model("workout", Schema);
