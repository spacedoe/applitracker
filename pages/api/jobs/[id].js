import dbConnect from "../../../db/connect";
import Job from "../../../db/models/Job";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const job = await Job.findById(id).populate("stages");

    if (!job) {
      return response.status(404).json({ status: "Not found" });
    }
    return response.status(200).json(job);
  }
}
