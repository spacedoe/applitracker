import { Container, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import React from "react";


export default function Footer() {
  return (
    <Container

      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        textAlign: "center",
        marginTop: "10px"
      }}
    >
      <Text fz="12px" my={10}>
        Created with{" "}
        <IconHeart
          color="var(--mantine-color-blue-filled)"
          height={18}
          width={18}
          style={{ position: "relative", top: "4px" }}
        />{" "}
        by Anna Steele. Build with Next.js, MongoDB, Mantine.
      </Text>
    </Container>
  );
}
