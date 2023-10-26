import { Button, Flex, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useSession } from "next-auth/react";


export default function AddJobPage() {
  const router = useRouter();
  const { data: session } = useSession();


  async function addJob(job) {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    if (response.ok) {
      router.push("/")
  
    } else {
      const error = await response.json();
      console.log("Error:", error, response.status);
    }
  }

  return (
    <>
      <Header session={session}/>
      <Button variant="filled" size="sm" component={Link} href="/">
        Back
      </Button>
      <Flex justify="center">
        <Title>Add Job</Title>
      </Flex>
      <Form onSubmit={addJob} formName={"add-job"} />
    </>
  );
}
