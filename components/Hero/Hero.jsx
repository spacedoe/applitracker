import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./Hero.module.css";
import { signIn } from "next-auth/react";

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title>
          <Text
            className={classes.title}
            variant="gradient"
            gradient={{ from: "blue", to: "pink", deg: 90 }}
          >
            Applitracker
          </Text>
        </Title>

        <Text className={classes.description} size="xl" mt="xl">
          Looking for a new job?
          <br /> Track all your job applications in one App!
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.signInButton}
          onClick={() => signIn()}
        >
          Sign in to get started
        </Button>
      </Container>
    </div>
  );
}
