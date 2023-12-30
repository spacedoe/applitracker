import { render, screen, fireEvent } from "../../test-utils";
import DarkModeButton from "./DarkModeButton";

describe("DarkModeButton", () => {
  test("renders a button with correct icon", () => {
    render(<DarkModeButton />);

    // console.log(screen.debug());

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const iconElement = screen.getByTestId("dark-mode-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute(
      "class",
      "tabler-icon tabler-icon-moon-stars"
    );
  });

  test("toggles dark mode when clicked", () => {
    render(<DarkModeButton />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    const htmlElement = document.querySelector("html");
    expect(htmlElement).toHaveAttribute("data-mantine-color-scheme", "dark");
  });
});
