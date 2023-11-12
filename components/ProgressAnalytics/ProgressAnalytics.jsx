import stageColorSetter, { localiseDate } from "@/utils/general";
import { Text, Progress, Flex, Stack, Container, Anchor } from "@mantine/core";

import React from "react";

export default function ProgressAnalytics({ jobs, userId }) {
  return (
    <Container my="8px" maw="fit-content" mb="100px">
      {jobs?.map((job) => {
        return (
          <Flex key={job._id} mb={20} gap={16}>
            <Stack maw="120px" w={100} miw={100} justify="center" gap={4}>
              <Anchor href={`/${userId}/jobs/${job._id}`}>
                <Text lh="1" fw={600}>
                  {job.role}
                </Text>
              </Anchor>
              <Text lh="1" fz="14px">
                {job.company}
              </Text>
            </Stack>

            <Stack justify="center">
              <Progress.Root size="auto">
                <Progress.Section
                  value={100}
                  color="#248ae4"
                  p="10px"
                  style={{ overflow: "unset" }}
                >
                  <Progress.Label fw={500} fz="15px">
                    {"Applied on:"} <br /> {localiseDate(job.appliedOn)}
                  </Progress.Label>
                </Progress.Section>

                {job.stages.map((stage, index) => {
                  const { _id, stageName, stageDate } = stage;
                  return (
                    <Progress.Section
                      key={_id}
                      value={100}
                      color={stageColorSetter(stageName, index)}
                      p="10px"
                      style={{ overflow: "unset" }}
                    >
                      <Progress.Label fw={500} fz="15px">
                        {stageName} <br /> {localiseDate(stageDate)}
                      </Progress.Label>
                    </Progress.Section>
                  );
                })}
              </Progress.Root>
            </Stack>
          </Flex>
        );
      })}
    </Container>
  );
}
