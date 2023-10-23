import { Badge, Button, Flex, NativeSelect } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { IconTrash } from "@tabler/icons-react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
// import moment from "moment";

dayjs.extend(customParseFormat);

export default function Stage({ count, onDeleteStage, uid, stage }) {
  // TODO: Fix stage Date format for rendering saved date

  // const savedDate = dayjs(stage?.stageDate, "DD.MM.YYYY").toDate();
  // console.log("saved date", savedDate);

  // let newDate = new Date('2023-10-16T00:00:00.000Z');
  // const savedDate = moment(stage?.stageDate)
  console.log("stage?.stageDate", stage?.stageDate);
  const savedDate = stage.stageDate;

  console.log("savedDate", savedDate);
  console.log("type of savedDate", typeof savedDate);
  // console.log("new date", newDate);
  // console.log("type of newDate", typeof newDate);

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
      <DatePickerInput
        valueFormat="DD.MM.YYYY"
        label="Date"
        name="stageDate"
        placeholder="Enter date"
        maw="120px"
        defaultValue={savedDate ? new Date(savedDate) : new Date()}
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
