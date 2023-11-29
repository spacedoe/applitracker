import { Container, Flex, Text } from "@mantine/core";
import classes from "./Header.module.css";

import UserAvatarDrawer from "../UserAvatarDrawer/UserAvatarDrawer";

export default function Header({ session }) {
  return (
    <Container
      w="100vw"
      style={{ overflowX: "hidden" }}
      className={classes.container}
    >
      <Flex justify="center">
        <Text
          className={classes.title}
          variant="gradient"
          gradient={{ from: "blue", to: "pink", deg: 90 }}
        >
          Applitracker
        </Text>
      </Flex>

      {session ? <UserAvatarDrawer session={session} /> : null}
    </Container>
  );
}
