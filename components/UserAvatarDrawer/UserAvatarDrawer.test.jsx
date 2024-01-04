import { fireEvent, render, screen, within } from "../../test-utils";
import UserAvatarDrawer from "./UserAvatarDrawer";

describe("UserAvatarDrawer", () => {
  const session = {
    user: {
      name: "Joe Doe",
      email: "joe@doe.com",
      image: "https://example.com/image.png",
    },
  };

  it("renders an avatar", () => {
    render(<UserAvatarDrawer session={session} />);
    const avatar = screen.getByRole("img", { name: /avatar/i });
    expect(avatar).toBeInTheDocument();
  });

  it("renders a drawer", () => {
    render(<UserAvatarDrawer session={session} />);
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });

  it("renders the user's avatar in the drawer", () => {
    render(<UserAvatarDrawer session={session} />);
    const drawer = screen.getByTestId("drawer");
    const avatar = screen.getByRole("img", { name: /avatar/i });
    // Open the drawer
    fireEvent.click(avatar);
    const drawerAvatar = within(drawer).getByAltText("Avatar");
    expect(drawerAvatar).toBeInTheDocument();
  });

  it("renders the user's name", () => {
    render(<UserAvatarDrawer session={session} />);
    const avatar = screen.getByRole("img", { name: /avatar/i });
    // Open the drawer
    fireEvent.click(avatar);
    const name = screen.getByText(/joe doe/i);
    expect(name).toBeInTheDocument();
  });

  it("renders sign out button", () => {
    render(<UserAvatarDrawer session={session} />);
    const avatar = screen.getByRole("img", { name: /avatar/i });
    // Open the drawer
    fireEvent.click(avatar);
    const signOutButton = screen.getByRole("button", { name: /sign out/i });
    expect(signOutButton).toBeInTheDocument();
  });
});
