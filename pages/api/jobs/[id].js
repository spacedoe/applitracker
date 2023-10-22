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
    try {
      const job = await Job.findById(id);

      if (!job) {
        return response.status(404).json({ status: "Not found" });
      }
      return response.status(200).json(job);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Job.findByIdAndDelete(id);
      return response.status(200).json({ status: "Job deleted sucessfully" });
    } catch (error) {
      response.status(404).json({ error: error.message });
    }
  }

  if (request.method === "PATCH") {
    try {
      await Job.findByIdAndUpdate(
        id,
        {
          $set: request.body,
        },
        {
          new: true,
        }
      );
      return response.status(200).json({ status: "Job updated sucessfully" });
    } catch (error) {
      response.status(404).json({ error: error.message });
    }
  }
}
