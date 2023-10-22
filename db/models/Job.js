import mongoose from "mongoose";
// import Stage from "./Stage";

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    // _id: Schema.Types.ObjectId,
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    URL: { type: String, required: true },
    description: { type: String },
    contactPerson: { type: String },
    contactDetails: { type: String },
    notes: { type: String },
    stages: {
      type: {
        stageName: String,
        stageDate: Date,
      },
    },
  },
  { collection: "jobs" }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;

// in database the name of the collection should be plural and lowercase
