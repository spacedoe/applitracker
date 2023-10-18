import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },

  // to be finished
});

const Job =
  mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;