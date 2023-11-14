import mongoose from "mongoose";
import User from "./User";

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: User },
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    URL: { type: String, required: true },
    summary: { type: String },
    contactPerson: { type: String },
    contactDetails: { type: String },
    notes: { type: String },
    appliedOn: { type: Date, required: true },
    stages: [
      {
        type: {
          stageName: String,
          stageDate: Date,
        },
      },
    ],
  },
  { collection: "jobs" }
);


const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;

// in database the name of the collection should be plural and lowercase
