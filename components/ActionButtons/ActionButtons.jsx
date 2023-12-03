import { Button, Flex } from "@mantine/core";
import { IconPencilPlus, IconReportAnalytics } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import classes from "./ActionButtons.module.css";

export default function ActionButtons({ userId }) {
  return (
    <Flex justify="space-between" pb={64} className={classes.container}>
      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "pink", deg: 270 }}
        size="sm"
        mt="50px"
        component="a"
        href={`/${userId}/progress`}
        leftSection={<IconReportAnalytics />}
      >
        View progress
      </Button>
      <Button
        variant="filled"
        size="sm"
        mt="50px"
        component={Link}
        href={`/${userId}/add`}
        leftSection={<IconPencilPlus />}
      >
        Add job
      </Button>
    </Flex>
  );
}
