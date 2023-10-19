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
        console.log("fetched job", job);
    
        if (!job) {
          return response.status(404).json({ status: "Not found" });
        }
    }
}