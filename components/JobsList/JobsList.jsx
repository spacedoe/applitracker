import { Button, Flex, Container } from "@mantine/core";
import JobsListHeader from "../JobsListHeader/JobListHeader";
import Link from "next/link";

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
      <Button variant="filled" size="xl" component={Link} href="/add">
        ADD new job opportunity
      </Button>
    </Container>
  );
}
