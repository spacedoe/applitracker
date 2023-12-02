import { Badge, Box, Button, Flex, NativeSelect } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconTrash } from "@tabler/icons-react";
import classes from "./Stage.module.css";

export default function Stage({
  count,
  onDeleteStage,
  uid,
  stageName,
  stageDate,
}) {
  return (
    <Flex className={classes.stageContainer} mb="sm">
      <Badge
        className={classes.badge}
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
          "Offer!",
          "Paused",
          "No reply",
          "Rejection",
        ]}
        defaultValue={stageName}
        className={classes.nativeSelect}
      />
      <DatePickerInput
        valueFormat="DD.MM.YYYY"
        label="Date"
        name="stageDate"
        maw="120px"
        defaultValue={new Date(stageDate)}
        required
        className={classes.datePickerInput}
      />

      <Button
        variant="outline"
        color="rgba(255, 87, 87, 1)"
        size="xs"
        h="36px"
        px="5px"
        onClick={() => onDeleteStage(uid)}
        className={classes.deleteButton}
      >
        <IconTrash color="rgba(255, 87, 87, 1)" />
      </Button>
    </Flex>
  );
}
