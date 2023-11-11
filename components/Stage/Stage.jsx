import { Badge, Button, Flex, NativeSelect } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconTrash } from "@tabler/icons-react";

export default function Stage({
  count,
  onDeleteStage,
  uid,
  stageName,
  stageDate,
}) {
  return (
    <Flex
      gap="sm"
      justify="space-between"
      align="flex-end"
      direction="row"
      wrap="nowrap"
      mb="sm"
    >
      <Badge
        variant="filled"
        color="var(--mantine-color-gray-6)"
        size="xl"
        radius="sm"
        h="36px"
      >
        Stage {count}
      </Badge>

      <NativeSelect
        label="Stage name"
        name="stageName"
        data={[
          "Initial Interview",
          "Second interview",
          "Technical interview",
          "Task",
          "Live coding",
          "Team fit",
          "Final interview",
          "Offer",
          "Paused",
          "Rejection",
          "No reply",
        ]}
        defaultValue={stageName}
      />
      <DatePickerInput
        valueFormat="DD.MM.YYYY"
        label="Date"
        name="stageDate"
        maw="120px"
        defaultValue={new Date(stageDate)}
        required
      />
      <Button
        variant="outline"
        color="rgba(255, 87, 87, 1)"
        size="xs"
        h="36px"
        px="5px"
        onClick={() => onDeleteStage(uid)}
      >
        <IconTrash color="rgba(255, 87, 87, 1)" />
      </Button>
    </Flex>
  );
}
