import { Button, Flex, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import useSWR from "swr";

export default function AddJobPage() {
  const router = useRouter();
  const { mutate } = useSWR("/api/jobs");

  async function handleAddJob(job) {
    console.log("job", job);
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    if (response.ok) {
      // router.push("/")
      mutate();
    } else {
      const error = await response.json();
      console.log("Error:", error, response.status);
    }
  }

  return (
    <>
      <Header />
      <Button variant="filled" size="sm" component={Link} href="/">
        Back
      </Button>
      <Flex justify="center">
        <Title>Add Job</Title>
      </Flex>
      <Form onAddJob={handleAddJob} formName={"add-job"} />
    </>
  );
}
