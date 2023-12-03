import { Avatar, Button, Drawer, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { signOut } from "next-auth/react";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import classes from "./UserAvatarDrawer.module.css";

export default function UserAvatarDrawer({ session }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Avatar
        className={classes.avatar}
        src={session.user?.image}
        alt="Avatar"
        priority="true"
        radius="100%"
        onClick={open}
        style={{ position: "absolute", top: "16px", right: "16px" }}
        styles={{ image: { cursor: "pointer" } }}
      />
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        size="md"
        styles={{ header: { zIndex: "-1" } }}
      >
        <Avatar
          width={200}
          height={200}
          src={session.user?.image}
          alt="Avatar"
          priority="true"
          radius="100%"
          size="lg"
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            zIndex: "1",
          }}
        />
        <Title order={4} pt="md" my="md">
          {" "}
          Hello {session.user?.name}
        </Title>
        <Text ta="start">
          You are signed in as <br /> {session.user?.email}
        </Text>
        <DarkModeButton />

        <Button
          onClick={() => signOut({ callbackUrl: "/" })}
          style={{ position: "absolute", bottom: "16px", left: "16px" }}
        >
          Sign out
        </Button>
      </Drawer>
    </>
  );
}
