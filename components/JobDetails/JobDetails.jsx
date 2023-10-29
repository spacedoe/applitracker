import { Anchor, Flex, Paper, Stack, Text, Timeline } from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons-react";
import { localiseDate } from "../../utils/general";

export default function JobDetails({ job }) {
  const {
    role,
    company,
    location,
    URL,
    summary,
    contactPerson,
    contactDetails,
    notes,
    stages,
  } = job;

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
          <Text ta="justify">
            Summary: <br /> <em>{summary}</em>
          </Text>
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
            {stages?.map((stage, index) => {
              const { _id, stageName, stageDate } = stage;

              return (
                <Timeline.Item
                  key={_id}
                  mb="20px"
                  bullet={<IconCircleCheck size={30} />}
                  lineVariant="solid"
                  title={`Stage ${index + 1}`}
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
