import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Button, Flex } from "@mantine/core";
import { IconPencilPlus, IconReportAnalytics } from "@tabler/icons-react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import JobsTable from "@/components/JobsTable/JobsTable";
import JobsTableSkeleton from "@/components/JobsTable/JobsTableSkeleton";
import Footer from "@/components/Footer/Footer";
import ActionButtons from "@/components/ActionButtons/ActionButtons";

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
      <Flex justify="center" maw={850} mx="auto" direction="column" mt={32}>
        {isLoading ? <JobsTableSkeleton /> : null}
        {error ? <p>Failed to load the jobs list</p> : null}
        {jobs ? <JobsTable jobs={jobs} userId={userId} /> : null}
        {hasNoJobs ? (
          <Flex mt={240} mb={320} justify="center">
            <Button
              variant="filled"
              size="xl"
              component="a"
              href={`${userId}/add`}
              leftSection={<IconPencilPlus />}
            >
              Add new job opportunity
            </Button>
          </Flex>
        ) : (
          <ActionButtons userId={userId} />
        )}
      </Flex>

      <Footer />
    </>
  );
}
