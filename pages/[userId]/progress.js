import Footer from "@/components/Footer/Footer";
import GoBackBnt from "@/components/GoBackBnt/GoBackBnt";
import Header from "@/components/Header/Header";
import ProgressAnalytics from "@/components/ProgressAnalytics/ProgressAnalytics";
import { Center, Flex,   Text,   Title } from "@mantine/core";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";

export default function ProgressPage() {
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

 

  return (
    <>
      <Header session={session} />
      <GoBackBnt />
      <Flex justify="center" mb={32}>
        <Title>Your progress</Title>
      </Flex>
      {isLoading ? <Center><Text>is loading</Text></Center> : null}
      {error ? <Center><Text>Failed to load the jobs list</Text></Center> : null}
      {jobs ? <ProgressAnalytics jobs={jobs} userId={userId}/> : null}

    </>
  );
}
