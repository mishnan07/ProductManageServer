import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    intensity: Number,
    name:String
  },
  { timestamps: true, collection: "datas" }
);

const Datas = model("Datas", dataSchema);

export default Datas;