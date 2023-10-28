import { Anchor, Flex, Paper, Stack, Text, Timeline } from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons-react";
import { localiseDate } from "../../utils/general";

export default function JobDetails({ job }) {
  const {
    role,
    company,
    location,
    URL,
    description,
    contactPerson,
    contactDetails,
    notes,
    stages,
  } = job;

  return (
    <Paper shadow="xs" p="xl" withBorder maw="600px" mx="auto">
      <Flex gap="70px">
        <Stack>
          <Text>Role: {role} </Text>
          <Text>Company: {company}</Text>
          <Text>Location: {location}</Text>
          <Text>
            URL:{" "}
            <Anchor href={`${URL}`} target="_blank">
              {URL}
            </Anchor>{" "}
          </Text>
          <Text>Description: {description}</Text>
          <Text>Contact person: {contactPerson}</Text>
          <Text>Contact details: {contactDetails}</Text>
          <Text>Notes: {notes}</Text>
        </Stack>

        <Stack>
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
