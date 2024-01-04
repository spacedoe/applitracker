import { render, screen } from "../../test-utils";
import Header from "./Header";
import UserAvatarDrawer from "../UserAvatarDrawer/UserAvatarDrawer";

jest.mock("../UserAvatarDrawer/UserAvatarDrawer", () => jest.fn(() => null));

describe("Header", () => {
  it("renders a header", () => {
    render(<Header />);
    const header = screen.getByText("Applitracker");

    expect(header).toBeInTheDocument();
  });

  it("renders UserAvatarDrawer when there is a session", () => {
    const session = { user: { name: "Test User", email: "test@example.com" } };

    render(<Header session={session} />);

    expect(UserAvatarDrawer).toHaveBeenCalledWith({ session }, {});
  });
});
