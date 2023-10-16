import { Button, Flex, Container } from "@mantine/core";
import JobsListHeader from "../JobsListHeader/JobListHeader";

export default function JobsList() {
  return (
    <Container
      gap="xl"
      justify="center"
      align="center"
      direction="column"
      my="xl"
    >
      <JobsListHeader />
      <Button variant="filled" size="xl">
        ADD new job opportunity
      </Button>
    </Container>
  );
}
