import { Button, Container, Flex } from "@mantine/core";
import Header from "../components/Header/Header";
import JobsTable from "../components/JobsTable/JobsTable";

import useSWR from "swr";
import { IconPencilPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Profile from "../components/Profile/Profile";
import { Hero } from "@/components/Hero/Hero";
import { useSession, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  const { data: jobs } = useSWR("/api/jobs", { fallbackData: [] });
  const [jobsAdded, setjobsAdded] = useState(false);

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      return setjobsAdded(true);
    } else {
      return setjobsAdded(false);
    }
  }, [jobs]);

  console.log("session", session);

  if (!session) {
    return (
      <>
        <Hero />
      </>
    );
  }

  return (
    <>
      <Header />
      <Profile />
      <Container
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        my="xl"
      >
        {!jobsAdded ? (
          <Button variant="filled" size="xl" component={Link} href="/add">
            <IconPencilPlus style={{ marginRight: "10px" }} /> Add new job
            opportunity
          </Button>
        ) : (
          <>
            <JobsTable jobs={jobs} />
            <Flex justify="flex-end">
              <Button variant="filled" size="sm" component={Link} href="/add">
                + Job
              </Button>
            </Flex>
          </>
        )}
      </Container>
    </>
  );
}
