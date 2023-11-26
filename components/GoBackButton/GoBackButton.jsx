import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function GoBackButton() {
  return (
    <Button
      variant="filled"
      size="sm"
      ml={8}
      mt={8}
      component={Link}
      href={"/"}
      leftSection={<IconArrowLeft />}
    >
      Back
    </Button>
  );
}
