import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    intensity: Number,
  },
  { timestamps: true, collection: "datas" }
);

const Datas = model("Datas", dataSchema);

export default Datas;