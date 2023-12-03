import { Button, Flex } from "@mantine/core";
import { IconPencilPlus } from "@tabler/icons-react";
import React from "react";

export default function AddFirstJobButton({ userId }) {
  return (
    <Flex mt={240} mb={320} justify="center">
      <Button
        variant="filled"
        size="xl"
        component="a"
        href={`${userId}/add`}
        leftSection={<IconPencilPlus />}
      >
        Add new job opportunity
      </Button>
    </Flex>
  );
}
