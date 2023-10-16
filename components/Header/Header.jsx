import { Container, Flex, Text, Title } from "@mantine/core";
import UserAvatar from "../UserAvatar/UserAvatar";

export default function Header() {
  return (
    <header>
      <Flex justify="center">
        <Container>
          <Title order={1}>
            <Text
              inherit
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "pink", deg: 90 }}
            >
              Applitracker
            </Text>
          </Title>
        </Container>
        <UserAvatar />
      </Flex>
    </header>
  );
}
