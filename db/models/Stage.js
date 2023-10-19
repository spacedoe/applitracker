import mongoose from "mongoose";

const { Schema } = mongoose;

const stageSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
});

const Stage = mongoose.models.Stage || mongoose.model("Stage", stageSchema);

export default Stage;
