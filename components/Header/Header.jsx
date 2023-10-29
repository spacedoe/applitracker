import { Container, Flex, Text, Title } from "@mantine/core";

import UserAvatarDrawer from "../UserAvatarDrawer/UserAvatarDrawer";

export default function Header({ session }) {
  return (
    <Container>
      <Flex justify="center" my="10px">
        <Title order={1}>
          <Text
            inherit
            fw={900}
            variant="gradient"
            gradient={{ from: "blue", to: "pink", deg: 90 }}
            fz={50}
          >
            Applitracker
          </Text>
        </Title>
      </Flex>

      {session ? <UserAvatarDrawer session={session} /> : null}
    </Container>
  );
}
