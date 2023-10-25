import { Avatar, Button, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { signOut } from "next-auth/react";

export default function Header({ session }) {
  return (
    <>
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

      {session ? (
        <Stack
          align="end"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          gap={0}
        >
          <Avatar
            width={200}
            height={200}
            src={session.user?.image}
            alt="Avatar"
            priority="true"
            radius="100%"
            size="lg"
          />

          <Text>Hello {session.user?.name}</Text>
          <Text ta="end">
            You are signed in as <br /> {session.user?.email}
          </Text>
          <Button onClick={() => signOut()}>Sign out</Button>
        </Stack>
      ) : null}
    </>
  );
}
