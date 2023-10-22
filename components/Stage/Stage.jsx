import { Badge, Button, Flex, NativeSelect } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconTrash } from "@tabler/icons-react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export default function Stage({ count, onDeleteStage, uid, stage }) {
  // TODO: Fix stage Date format for rendering saved date

  const savedDate = dayjs(stage?.stageDate, "DD.MM.YYYY").toDate();

  let newDate = new Date();

  console.log("stage date", stage?.stageDate);
  console.log("saved date", savedDate);
  console.log("new date", newDate);

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
          "Applied on",
          "Initial interview",
          "Technical interview",
          "Technical challenge",
          "Live coding",
          "Team fit",
          "Final interview",
          "Offer",
          "Pause",
          "Rejection",
        ]}
        defaultValue={stage?.stageName}
      />
      <DateInput
        valueFormat="DD.MM.YYYY"
        label="Date"
        name="stageDate"
        placeholder="Enter date"
        maw="120px"
        defaultValue={new Date()}
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
