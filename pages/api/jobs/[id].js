import dbConnect from "../../../db/connect";
import Job from "../../../db/models/Job";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }
console.log("requst method", request.method);

  if (request.method === "GET") {
    const job = await Job.findById(id);

    if (!job) {
      return response.status(404).json({ status: "Not found" });
    }
    return response.status(200).json(job);
  }

  if (request.method === "DELETE") {
    const jobToDelete = await Job.findByIdAndDelete(id);
    console.log("jobToDelete", jobToDelete);
    return response.status(200).json({ status: "Job deleted" });
  }
}
