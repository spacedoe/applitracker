import { localiseDate } from "@/utils/general";
import { Text, Progress, Flex, Stack, Container, Anchor } from "@mantine/core";

import React from "react";

export default function ProgressAnalytics({ jobs, userId }) {
  const colors = ["#477ed2", "#6574c2", "#8c67ae", "#b4599a"];

  const appliedColor = "#248ae4";
  const offerColor = "#e44981";
  const pausedColor = "#868e96";
  const rejectionColor = "#005ba2";
  const noReplyColour = "#006ab7";

  return (
    <Container my="32px" mb="100px">
      {jobs?.map((job) => {
        return (
          <Flex key={job._id} mb={20} gap={20}>
            <Stack maw="120px" w={100} justify="center" gap={4}>
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
                  key={job._id}
                  value={100}
                  color={appliedColor}
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
                      color={colors[index % colors.length]}
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
