import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Button, Container, Flex } from "@mantine/core";
import { IconPencilPlus, IconReportAnalytics } from "@tabler/icons-react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import JobsTable from "@/components/JobsTable/JobsTable";
import JobsTableSkeleton from "@/components/JobsTable/JobsTableSkeleton";
import Footer from "@/components/Footer/Footer";

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

  const hasNoJobs = jobs && jobs.length === 0 && !isLoading;

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
        {isLoading ? <JobsTableSkeleton /> : null}
        {error ? <p>Failed to load the jobs list</p> : null}
        {jobs ? <JobsTable jobs={jobs} userId={userId} /> : null}
        {hasNoJobs ? (
          <Button
            variant="filled"
            size="xl"
            mb={380}
            component="a"
            href={`${userId}/add`}
            leftSection={<IconPencilPlus />}
          >
            Add new job opportunity
          </Button>
        ) : (
          <Flex justify="space-between" mb="150px">
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "pink", deg: 270 }}
              size="sm"
              mt="50px"
              component="a"
              href={`${userId}/progress`}
              leftSection={<IconReportAnalytics />}
            >
              View progress
            </Button>
            <Button
              variant="filled"
              size="sm"
              mt="50px"
              component={Link}
              href={`${userId}/add`}
              leftSection={<IconPencilPlus />}
            >
              Add job
            </Button>
          </Flex>
        )}
      </Container>
      <Footer />
    </>
  );
}
