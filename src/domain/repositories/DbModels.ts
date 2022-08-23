import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Machine", machineSchema);
