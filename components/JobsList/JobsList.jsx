import { Button, Flex, Container } from "@mantine/core";
import JobsListHeader from "../JobsListHeader/JobListHeader";
import Link from "next/link";
import JobsTable from "../JobsTable/JobsTable";

export default function JobsList({jobs}) {
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
        Add new job opportunity
      </Button>
      <JobsTable jobs={jobs}/>

    </Container>
  );
}
