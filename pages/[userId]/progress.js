import GoBackButton from "@/components/GoBackButton/GoBackButton";
import Header from "@/components/Header/Header";
import ProgressAnalytics from "@/components/ProgressAnalytics/ProgressAnalytics";
import { Center, Flex, Loader, Text, Title } from "@mantine/core";
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
      <GoBackButton />
      <Flex justify="center" mb={32}>
        <Title>Your progress</Title>
      </Flex>
      {isLoading ? (
        <Center mt={32}>
          <Loader size={30} />
        </Center>
      ) : null}
      {error ? (
        <Center>
          <Text>Failed to load the jobs list</Text>
        </Center>
      ) : null}
      {jobs ? <ProgressAnalytics jobs={jobs} userId={userId} /> : null}
    </>
  );
}
