import { render, screen } from "../../test-utils";
import JobsTable from "./JobsTable";

describe("JobsTable", () => {
  it("renders a JobsTable", () => {
    const jobs = [
      {
        _id: "654f86e6919b95fc2b56557a",
        role: "Frontend Developer",
        company: "Hooli",
        location: "onsite",
        URL: "https://www.hooli.com",
        description: "some description",
        contactPerson: "Jessica Park",
        contactDetails: "jessica.park@example.com",
        notes: "some notes",
        appliedOn: "2023-11-17T00:14:31.154Z",
        stages: [
          {
            stageName: "Initial Interview",
            stageDate: "2023-11-11T23:00:00.000Z",
            _id: "656b54b852d46faf448cab36",
          },
          {
            stageName: "Task",
            stageDate: "2023-11-21T23:00:00.000Z",
            _id: "656b54b852d46faf448cab37",
          },
          {
            stageName: "Paused",
            stageDate: "2023-11-12T12:48:48.125Z",
            _id: "656b54b852d46faf448cab38",
          },
        ],
      },

      {
        _id: "654f86e6919b95fc2b56557b",
        role: "Web Developer",
        company: "Example Company",
        location: "hybrid",
        URL: "exmple link",
        description: "example description",
        contactPerson: "Example Contact",
        contactDetails: "example.contact@example.com",
        notes: "example notes",
        appliedOn: "2023-11-20T00:14:31.154Z",
        stages: [
          {
            stageName: "Initial Interview",
            stageDate: "2023-11-21T23:00:00.000Z",
            _id: "656b54b852d46faf448cac36",
          },
          {
            stageName: "Second Interview",
            stageDate: "2023-11-27T23:00:00.000Z",
            _id: "656b54b852d46faf448cac37",
          },
          {
            stageName: "Live coding",
            stageDate: "2023-12-05T12:48:48.125Z",
            _id: "656b54b852d46faf448cac38",
          },
        ],
      },
    ];
    render(<JobsTable userId={123} jobs={jobs} />);
    const jobsTable = screen.getByRole("table");

    expect(jobsTable).toBeInTheDocument();
  });
});
