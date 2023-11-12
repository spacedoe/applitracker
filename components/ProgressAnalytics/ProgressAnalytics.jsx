import { localiseDate } from "@/utils/general";
import { Text, Progress, Flex, Stack, Container, Anchor } from "@mantine/core";

import React from "react";

export default function ProgressAnalytics({ jobs, userId }) {
  const colors = [
    "#3f81d6",
    "#5e77c6",
    "#746fbb",
    "#8d66ae",
    "#a75da1",
    "#c15493",
  ];

  const appliedColor = "#248ae4";
  const offerColor = "#e44981";

  const pausedColor = "#868e96";
  const rejectionColor = "#495866";
  const noReplyColour = "#67717c";

  function setStageNameColor(stageName, index) {
    switch (stageName) {
      case "Offer":
        return offerColor;
      case "Rejection":
        return rejectionColor;
      case "Paused":
        return pausedColor;
      case "No reply":
        return noReplyColour;
      default:
        return colors[index % colors.length];
    }
  }

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
                      color={setStageNameColor(stageName, index)}
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
