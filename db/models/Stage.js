import mongoose from "mongoose";

const { Schema } = mongoose;

const stageSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String },
  date: { type: String },
});

const Stage = mongoose.models.Stage || mongoose.model("Stage", stageSchema);

export default Stage;
