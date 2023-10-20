import { Anchor, Flex, Group, Paper, Stack, Text, Timeline } from "@mantine/core";

import {
  IconCircleCheck,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons-react";
import { Fragment } from "react";

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
    <>
      <Paper shadow="xs" p="xl" withBorder maw="600px" mx="auto">
        <Flex justify="space-around">
          <Stack>
            <Text>Role: {role} </Text>
            <Text>Company: {company}</Text>
            <Text>Location: {location}</Text>
            <Text>URL: <Anchor href={`${URL}`} target="_blank">{URL}</Anchor> </Text>
            <Text>Description: {description}</Text>
            <Text>Contact person: {contactPerson}</Text>
            <Text>Contact details: {contactDetails}</Text>
            <Text>Notes: {notes}</Text>
          </Stack>

          <Stack>
            <Timeline active={2} bulletSize={30} lineWidth={2} color="blue">
              {stages?.map((stage, index) => {
                return (
                  <Timeline.Item
                    key={stage._id}
                    mb="20px"
                    bullet={<IconCircleCheck size={30} />}
                    lineVariant="solid"
                    title={`Stage ${index+1}`}
                  >
                    <Text size="sm">{stage.name}</Text>

                    <Text size="xs" mt={4}>
                      {stage.date}
                    </Text>
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </Stack>
        </Flex>
      </Paper>
    </>
  );
}

// rfc
