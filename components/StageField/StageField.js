import { Flex, NativeSelect, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export default function StageField() {
  return (
    <Flex
      gap="sm"
      justify="space-between"
      align="flex-start"
      direction="row"
      wrap="nowrap"
      mb="sm"
    >
      <NativeSelect
        label="Stage"
        data={["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"]}
        maw="250px"
      />
      <TextInput label="Stage name" placeholder="e.g. Interview stage" />
      <DateInput
        valueFormat="DD.MM.YYYY"
        label="Date"
        placeholder="Enter date"
      />
    </Flex>
  );
}
