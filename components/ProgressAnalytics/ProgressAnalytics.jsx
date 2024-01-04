import stageColorSetter, { localiseDate } from "@/utils/general";
import {
  Text,
  Progress,
  Flex,
  Stack,
  Container,
  Anchor,
  Box,
  Center,
} from "@mantine/core";
import classes from "./ProgressAnalytics.module.css";

import React from "react";

export default function ProgressAnalytics({ jobs, userId }) {
  return (
    <Container
      maw="fit-content"
      mx="auto"
      pb={32}
      data-testid="progress-analytics"
    >
      {jobs?.map((job) => {
        return (
          <Flex key={job._id} mb={20} gap={16}>
            <Stack
              maw="120px"
              w={100}
              miw={100}
              gap={4}
              className={classes.jobContainer}
            >
              <Anchor href={`/${userId}/jobs/${job._id}`} lh="1" fw={600}>
                {job.role}
              </Anchor>
              <Text lh="1" fz="14px" data-testid="job-company">
                {job.company}
              </Text>
            </Stack>

            <Stack justify="center">
              <Flex className={classes.stagesBar}>
                <Text className={classes.stage} bg="#248ae4">
                  {"Applied on"} <br /> {localiseDate(job.appliedOn)}
                </Text>

                {job.stages.map((stage, index) => {
                  const { _id, stageName, stageDate } = stage;
                  return (
                    <Text
                      className={classes.stage}
                      key={_id}
                      bg={stageColorSetter(stageName, index)}
                    >
                      {stageName} <br /> {localiseDate(stageDate)}
                    </Text>
                  );
                })}
              </Flex>
            </Stack>
          </Flex>
        );
      })}
    </Container>
  );
}
