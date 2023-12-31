import { useRouter } from "next/router";
import Header from "../../../../components/Header/Header";
import Form from "../../../../components/Form/Form";
import { Button, Center, Flex, Loader, Text, Title } from "@mantine/core";
import useSWR from "swr";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

export default function EditPage() {
  const { data: session } = useSession();
  const userId = session?.user?.userId;
  const router = useRouter();

  const { id } = router.query;
  const { data: job, isLoading, error } = useSWR(`/api/${userId}/jobs/${id}`);

  if (error) return <Center><Text>Failed to load</Text></Center>;
  if (!job || isLoading) return <Center mt={32}><Loader size={30} /></Center>;

  async function editJob(job) {
    try {
      const response = await fetch(`/api/${userId}/jobs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      if (response.ok) {
        notifications.show({
          title: "Done!",
          message: "The job has been updated 👍",
          icon: <IconCheck />,
          color: "teal",
          autoClose: 5000,
        });
        router.push(`/${userId}/jobs/${id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Header session={session} />
      <Button
        variant="filled"
        size="sm"
        ml="8px"
        component={Link}
        href={`/${userId}/jobs/${id}`}
        leftSection={<IconArrowLeft />}
      >
        Back
      </Button>
      <Flex justify="center">
        <Title>Edit Job</Title>
      </Flex>
      <Form onSubmit={editJob} formName={"edit-job"} savedData={job} />
    </>
  );
}
