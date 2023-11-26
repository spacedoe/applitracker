import { Anchor, Box, Container, Flex, Stack, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import React from "react";

export default function Footer() {
  return (
    <Stack mt={4} ta="center" gap={0}>
      <Text fz={14}>
        Created with{" "}
        <IconHeart
          color="var(--mantine-color-blue-filled)"
          height={18}
          width={18}
          style={{ position: "relative", top: "4px" }}
        />{" "}
        by Anna Steele. Build with Next.js, MongoDB, Mantine.
      </Text>
      <Text fz={14}>
        By signing in and using Applitracker you agree to the{" "}
        <Anchor fz={14} href="/policies#terms-and-conditions">
          T&C
        </Anchor>{" "}
        and{" "}
        <Anchor fz={14} href="/policies#cookie-policy">
          Cookie Policy
        </Anchor>
        .
      </Text>
    </Stack>
  );
}
