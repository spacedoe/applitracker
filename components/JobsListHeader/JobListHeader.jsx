import { Group, Badge } from "@mantine/core";

export default function JobsListHeader() {
  return (
    <Group justify="center" gap="xl" my="xl">
      <Badge variant="outline" color="blue" size="lg" radius="sm">
        Title
      </Badge>
      <Badge variant="outline" color="blue" size="lg" radius="sm">
        Company
      </Badge>
      <Badge variant="outline" color="blue" size="lg" radius="sm">
        Location
      </Badge>
      <Badge variant="outline" color="blue" size="lg" radius="sm">
        Date
      </Badge>
      <Badge variant="outline" color="blue" size="lg" radius="sm">
        Stage
      </Badge>
    </Group>
  );
}
