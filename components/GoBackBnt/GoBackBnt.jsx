import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function GoBackBnt() {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <Button
      variant="filled"
      size="sm"
      ml="8px"
      component={Link}
      href={`/${userId}`}
      leftSection={<IconArrowLeft />}
    >
      Back
    </Button>
  );
}
