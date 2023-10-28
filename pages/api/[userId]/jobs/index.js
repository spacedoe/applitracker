import dbConnect from "../../../../db/connect";
import Job from "../../../../db/models/Job";

export default async function handler(request, response) {
  await dbConnect();
  const { userId } = request.query;

  if (request.method === "GET") {
    const jobs = await Job.find({ userId });

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
