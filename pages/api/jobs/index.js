import dbConnect from "../../../db/connect";
import Job from "../../../db/models/Job";

export default async function handler(request, response) {
  await dbConnect();
  console.log("request method", request.method);
  if (request.method === "GET") {
    const jobs = await Job.find();

    return response.status(200).json(jobs);
  }

  if (request.method === "POST") {
    try {
      const jobData = request.body;
      await Job.create(jobData);

      return response.status(201).json({ status: "Job created." });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}
