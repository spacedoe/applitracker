import { Badge, Button, Flex, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconTrash } from "@tabler/icons-react";

export default function Stage({ count, onDeleteStage, uid }) {
  return (
    <Flex
      gap="sm"
      justify="space-between"
      align="flex-end"
      direction="row"
      wrap="nowrap"
      mb="sm"
    >
      <Badge variant="outline" color="blue" size="xl" radius="sm" h="36px">
        Stage {count}
      </Badge>

      {/* <NativeSelect
    label="Stage"
    data={["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"]}
    maw="250px"
  /> */}

      <TextInput label="Stage name" placeholder="e.g. CV sent" />
      <DateInput
        valueFormat="DD.MM.YYYY"
        label="Date"
        placeholder="Enter date"
        maw="120px"
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
