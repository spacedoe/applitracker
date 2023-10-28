import { Button, Container, Flex } from "@mantine/core";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Link from "next/link";
import Header from "../../components/Header/Header";
import { IconPencilPlus } from "@tabler/icons-react";
import JobsTable from "../../components/JobsTable/JobsTable";

export default function UserPage() {
  const { data: session } = useSession();
  const userId = session?.user?.userId;

  const {
    data: jobs,
    error,
    isLoading,
  } = useSWR(userId ? `/api/${userId}/jobs` : null, {
    fallbackData: [],
    revalidateOnFocus: false,
  });

  if (!session) {
    return null;
  }

  return (
    <>
      <Header session={session} />
      <Container
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        my="xl"
        mt="150px"
      >
        {isLoading ? <p>Loading jobs list...</p> : null}
        {error ? <p>Failed to load the jobs list</p> : null}
        {jobs && jobs.length > 0 ? (
          <>
            <JobsTable jobs={jobs} userId={userId} />
            <Flex justify="flex-end">
              <Button
                variant="filled"
                size="sm"
                mt="50px"
                component={Link}
                href={`${userId}/add`}
              >
                + Job
              </Button>
            </Flex>
          </>
        ) : null}
        {jobs && jobs.length === 0 ? (
          <Button
            variant="filled"
            size="xl"
            component={Link}
            href={`${userId}/add`}
          >
            <IconPencilPlus style={{ marginRight: "10px" }} /> Add new job
            opportunity
          </Button>
        ) : null}
      </Container>
    </>
  );
}
