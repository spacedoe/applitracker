import { Button, Container, Flex } from "@mantine/core";
import Header from "../../components/Header/Header";
import JobsTable from "../../components/JobsTable/JobsTable";

import useSWR from "swr";
import { IconPencilPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Hero } from "@/components/Hero/Hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function UserPage() {
  const { data: session } = useSession();
  const userId = session?.user?.userId
  console.log("userId", userId);
  const { data: jobs } = useSWR(`/api/${userId}/jobs`, { fallbackData: [] });
  const [jobsAdded, setjobsAdded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      return setjobsAdded(true);
    } else {
      return setjobsAdded(false);
    }
  }, [jobs]);

 

  return (
    <>
      <Header session={session}/>
      <Container
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        my="xl"
        mt="150px"
      >
        {!jobsAdded ? (
          <Button variant="filled" size="xl" component={Link} href={`${userId}/add`}>
            <IconPencilPlus style={{ marginRight: "10px" }} /> Add new job
            opportunity
          </Button>
        ) : (
          <>
            <JobsTable jobs={jobs} userId={userId}/>
            <Flex justify="flex-end">
              <Button variant="filled" size="sm" component={Link} href={`${userId}/add`}>
                + Job
              </Button>
            </Flex>
          </>
        )}
      </Container>
    </>
  );
}
