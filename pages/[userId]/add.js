import { Flex, Title } from "@mantine/core";
import { useRouter } from "next/router";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { useSession } from "next-auth/react";
import GoBackBnt from "@/components/GoBackBnt/GoBackBnt";
import Footer from "@/components/Footer/Footer";

export default function AddJobPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const userId = session?.user?.userId;

  async function addJob(job) {
    const response = await fetch("/api/user/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...job, userId }),
    });
    if (response.ok) {
      router.push(`/${userId}`);
    } else {
      const error = await response.json();
      console.log("Error:", error, response.status);
    }
  }

  return (
    <>
      <Header session={session} />
      <GoBackBnt />
      <Flex justify="center">
        <Title>Add Job</Title>
      </Flex>
      <Form onSubmit={addJob} formName={"add-job"} />
      <Footer />
    </>
  );
}
