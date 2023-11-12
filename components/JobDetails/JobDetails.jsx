import {
  Anchor,
  Flex,
  Paper,
  Spoiler,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";

import {
  IconCircleCheck,
  IconCircleDashed,
  IconCircleDashedX,
  IconCircleX,
} from "@tabler/icons-react";
import stageColorSetter, { localiseDate } from "../../utils/general";

export default function JobDetails({ job }) {
  const {
    _id,
    role,
    company,
    location,
    URL,
    summary,
    contactPerson,
    contactDetails,
    notes,
    appliedOn,
    stages,
  } = job;

  function setIcon(stageName) {
    switch (stageName) {
      case "Rejection":
        return <IconCircleX />;
      case "Paused":
        return <IconCircleDashed />;
      case "No reply":
        return <IconCircleDashedX />;
      default:
        return <IconCircleCheck />;
    }
  }

  return (
    <Paper shadow="xs" p="xl" withBorder maw="768px" w={"100%"}>
      <Flex gap="20px" mx="lg" wrap={"nowrap"}>
        <Stack maw={400}>
          <Text>
            Role: <strong>{role}</strong>{" "}
          </Text>
          <Text>
            Company: <strong>{company}</strong>
          </Text>
          <Text>
            Location: <strong>{location}</strong>
          </Text>
          <Text>
            <Anchor href={`${URL}`} target="_blank">
              <strong>Job offer link</strong>
            </Anchor>
          </Text>
          <Spoiler maxHeight={150} showLabel="Show more" hideLabel="Hide">
            <Text ta="justify">
              Summary: <br /> <em>{summary}</em>
            </Text>
          </Spoiler>
          <Text>
            Contact person: <strong>{contactPerson}</strong>
          </Text>
          <Text>
            Contact details: <strong>{contactDetails}</strong>
          </Text>
          <Text>
            Notes: <br />
            <em>{notes}</em>
          </Text>
        </Stack>

        <Stack ml="auto">
          <Timeline active={10} bulletSize={30} lineWidth={2} color="blue">
            <Timeline.Item
              key={_id}
              mb="20px"
              bullet={<IconCircleCheck size={30} />}
              lineVariant="solid"
              // color="var(--mantine-color-gray-6)"
              title="Applied on:"
            >
              <Text size="xs" mt={4}>
                {localiseDate(appliedOn)}
              </Text>
            </Timeline.Item>

            {stages?.map((stage, index) => {
              const { _id, stageName, stageDate } = stage;

              return (
                <Timeline.Item
                  key={_id}
                  mb="20px"
                  bullet={setIcon(stageName)}
                  lineVariant="solid"
                  title={`Stage ${index + 1}`}
                  color={stageColorSetter(stageName, index)}
                >
                  <Text size="sm">{stageName}</Text>

                  <Text size="xs" mt={4}>
                    {localiseDate(stageDate)}
                  </Text>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Stack>
      </Flex>
    </Paper>
  );
}

// rfc
