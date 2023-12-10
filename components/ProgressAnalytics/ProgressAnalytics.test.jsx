import { render, screen } from "../../test-utils";
import ProgressAnalytics from "./ProgressAnalytics";

describe("ProgressAnalytics", () => {
  const jobs = [
    {
      _id: "1",
      role: "Software Engineer",
      company: "Google",
      appliedOn: "2021-08-01T00:00:00.000Z",
      stages: [
        {
          _id: "1",
          stageName: "Initial Interview",
          stageDate: "2021-08-01T00:00:00.000Z",
        },
        {
          _id: "2",
          stageName: "Second Interview",
          stageDate: "2021-08-02T00:00:00.000Z",
        },
      ],
    },
    {
      _id: "2",
      role: "Software Engineer",
      company: "Facebook",
      appliedOn: "2021-08-01T00:00:00.000Z",
      stages: [
        {
          _id: "1",
          stageName: "Initial Interview",
          stageDate: "2021-08-01T00:00:00.000Z",
        },
        {
          _id: "2",
          stageName: "Task",
          stageDate: "2021-08-02T00:00:00.000Z",
        },
      ],
    },
  ];

  const job = jobs.map((job) => job);

  it("renders ProgressAnalytics", () => {
    render(<ProgressAnalytics />);
    const progressAnalytics = screen.getByTestId("progress-analytics");

    expect(progressAnalytics).toBeInTheDocument();
  });

  it("renders the correct number of job roles and companies", () => {
    render(<ProgressAnalytics jobs={jobs} />);

    const jobRole = screen.getAllByTestId("job-role");
    const jobCompany = screen.getAllByTestId("job-company");

    // const jobRole = screen.getByRole("link", { name: `${job.role}` });
    // const jobCompany = screen.getByRole("link", { name: `${job.company}` });

    expect(jobRole.length).toBe(2);
    expect(jobCompany.length).toBe(2);
  });

  it("renders progress bar for each job", () => {
    render(<ProgressAnalytics jobs={jobs} />);
    const progressBar = screen.getAllByTestId("progress-bar");
    expect(progressBar.length).toBe(2);
  });

  // Replace Progressbar to divs:

  //   it("renders the correct number of progress bar sections for each job", () => {
  //     render(<ProgressAnalytics jobs={jobs} />);
  //     const progressBarSection = screen.getAllByRole("progressbar");
  //     const progressBarSectionsPerJob = progressBarSection.length / jobs.length;
  //     expect(progressBarSectionsPerJob).toBe(job[0].stages.length + 1);
  //   });
});
