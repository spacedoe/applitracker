import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import Form from "../../../components/Form/Form";
import { Button, Flex, Title } from "@mantine/core";
import useSWR from "swr";
import Link from "next/link";

export default function EditPage() {
  const router = useRouter();

  const { id } = router.query;
  const { data: job, isLoading, error, mutate } = useSWR(`/api/jobs/${id}`);

  if (error) return <div>Failed to load</div>;
  if (!job || isLoading) return <h2>Loading...</h2>;

  async function editJob(job) {
    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      if (response.ok) {
        router.push(`/jobs/${id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Header />
      <Button variant="filled" size="sm" component={Link} href={`/jobs/${id}`}>
        Back
      </Button>
      <Flex justify="center">
        <Title>Edit Job</Title>
      </Flex>
      <Form
        onSubmit={editJob}
        formName={"edit-job"}
        savedData={job}
      />
    </>
  );
}
