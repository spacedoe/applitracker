import { Anchor, Stack, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <Stack mt={6} ta="center" gap={0} className={classes.footer}>
      <Text inherit>
        Created with{" "}
        <IconHeart
          color="var(--mantine-color-blue-filled)"
          height={18}
          width={18}
          style={{ position: "relative", top: "4px" }}
        />{" "}
        by Anna Steele.{" "}
        <span className={classes.span}>
          Build with Next.js, MongoDB, Mantine.
        </span>
      </Text>
      <Text inherit>
        By signing in and using Applitracker you agree to{" "}
        <span className={classes.span}>
          the{" "}
          <Anchor inherit href="/policies#terms-and-conditions">
            T&C
          </Anchor>{" "}
          and{" "}
          <Anchor inherit href="/policies#cookie-policy">
            Cookie Policy
          </Anchor>
          .
        </span>
      </Text>
    </Stack>
  );
}
