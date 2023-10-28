import { useRouter } from "next/router";
import Header from "../../../../components/Header/Header";
import Form from "../../../../components/Form/Form";
import { Button, Flex, Title } from "@mantine/core";
import useSWR from "swr";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function EditPage() {
  const { data: session } = useSession();
  const userId = session?.user?.userId
  const router = useRouter();

  const { id } = router.query;
  const { data: job, isLoading, error } = useSWR(`/api/${userId}/jobs/${id}`);

  if (error) return <div>Failed to load</div>;
  if (!job || isLoading) return <h2>Loading...</h2>;

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
        router.push(`/${userId}/jobs/${id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Header session={session} />
      <Button variant="filled" size="sm" component={Link} href={`/${userId}/jobs/${id}`}>
        Back
      </Button>
      <Flex justify="center">
        <Title>Edit Job</Title>
      </Flex>
      <Form onSubmit={editJob} formName={"edit-job"} savedData={job} />
    </>
  );
}
