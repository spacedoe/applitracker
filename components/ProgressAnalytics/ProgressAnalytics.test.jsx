import { render, screen } from "../../test-utils";
import ProgressAnalytics from "./ProgressAnalytics";

describe("ProgressAnalytics", () => {
  const mockJobs = [
    {
      _id: "1",
      role: "Software Developer",
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

  it("renders ProgressAnalytics", () => {
    render(<ProgressAnalytics jobs={mockJobs} userId={"123"} />);

    const progressAnalytics = screen.getByTestId("progress-analytics");
    expect(progressAnalytics).toBeInTheDocument();

    const jobRole = screen.getByRole("link", { name: "Software Developer" });
    expect(jobRole).toBeInTheDocument();

    const jobCompany = screen.getByText("Facebook");
    expect(jobCompany).toBeInTheDocument();
  });
});
