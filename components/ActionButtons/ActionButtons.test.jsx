import { render, screen } from "../../test-utils";
import ActionButtons from "./ActionButtons";

describe("Action Buttons", () => {
  it("renders two button-links", () => {
    render(<ActionButtons userId={"123"} />);
    const actionButton = screen.getAllByRole("link");

    expect(actionButton).toHaveLength(2);
  });

  it("renders the first button-link with a name 'View progress'", () => {
    render(<ActionButtons userId={"123"} />);
    const viewProgressButton = screen.getByRole("link", {
      name: "View progress",
    });

    expect(viewProgressButton).toBeInTheDocument();
  });

  it("renders the second button-link with the name 'Add job'", () => {
    render(<ActionButtons userId={"123"} />);
    const addJobButton = screen.getByRole("link", {
      name: "Add job",
    });

    expect(addJobButton).toBeInTheDocument();
  });

  it("'View progres' Button renders the correct link", () => {
    render(<ActionButtons userId={"123"} />);

    const viewProgressButton = screen.getByRole("link", {
      name: "View progress",
    });

    expect(viewProgressButton).toHaveAttribute("href", "/123/progress");

    // console.log(screen.debug());
    // console.log(viewProgressButton);

    // alternative solution:
    // const viewSth = screen.getByTestId("view-progress-button");
    // expect(viewSth).toHaveAttribute("href", "/123/progress");
  });

  it("'Add job' button renders the correct link", () => {
    render(<ActionButtons userId={"123"} />);

    const addJobButton = screen.getByRole("link", {
      name: "Add job",
    });

    expect(addJobButton).toHaveAttribute("href", "/123/add");
  });
});
