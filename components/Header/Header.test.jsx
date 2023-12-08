import { render, screen } from "../../test-utils";
import Header from "./Header";

describe("Header", () => {
  it("renders a header", () => {
    render(<Header />);
    const header = screen.getByText("Applitracker");

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("title");
  });
});
