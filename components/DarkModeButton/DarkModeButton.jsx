import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { Container } from "@mantine/core";
import React from "react";

export default function DarkModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Container style={{ position: "absolute", top: "16px", right: "32px" }}>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} data-testid="dark-mode-icon" />
        )}
      </ActionIcon>
    </Container>
  );
}
