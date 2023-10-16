import { Avatar, Stack, Text } from "@mantine/core";

export default function UserAvatar() {
  return (
    <Stack align="center" gap={0}>
      <Avatar radius="xl" />
      <Text size="sm">Joe Doe</Text>
    </Stack>
  );
}
