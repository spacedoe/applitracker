import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Flex } from "@mantine/core";
import Header from "@/components/Header/Header";
import JobsTable from "@/components/JobsTable/JobsTable";
import JobsTableSkeleton from "@/components/JobsTable/JobsTableSkeleton";
import Footer from "@/components/Footer/Footer";
import ActionButtons from "@/components/ActionButtons/ActionButtons";
import AddFirstJobButton from "@/components/AddFirstJobButton/AddFirstJobButton";
import classes from "../index.module.css";

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
    <Flex className={classes.container}>
      <Header session={session} />
      <Flex
        justify="center"
        maw={850}
        mx="auto"
        direction="column"
        mt={32}
        style={{ flex: "1 0 auto" }}
      >
        {isLoading ? <JobsTableSkeleton /> : null}
        {error ? <p>Failed to load the jobs list</p> : null}
        {jobs ? <JobsTable jobs={jobs} userId={userId} /> : null}
        {hasNoJobs ? (
          <AddFirstJobButton userId={userId} />
        ) : (
          <ActionButtons userId={userId} />
        )}
      </Flex>
      <Footer />
    </Flex>
  );
}
