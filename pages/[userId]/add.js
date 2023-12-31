import { Flex, Title } from "@mantine/core";
import { useRouter } from "next/router";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { useSession } from "next-auth/react";
import GoBackButton from "@/components/GoBackButton/GoBackButton";
import { IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

export default function AddJobPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const userId = session?.user?.userId;

  async function addJob(job) {
    try {
      console.log("addJob async function", job);
      const response = await fetch("/api/user/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...job, userId }),
      });
      if (response.ok) {
        notifications.show({
          title: "Success!",
          message: "The job has been added 👍",
          icon: <IconCheck />,
          color: "teal",
          autoClose: 5000,
          withBorder: true,
        });

        router.push(`/${userId}`);
      } else {
        const error = await response.json();
        console.log("Error:", error, response.status);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      <Header session={session} />
      <GoBackButton />
      <Flex justify="center">
        <Title>Add Job</Title>
      </Flex>
      <Form onSubmit={addJob} formName={"add-job"} />
    </>
  );
}
