import { Button, Flex, Group, Modal, Title } from "@mantine/core";
import Header from "../../../../components/Header/Header";
import JobDetails from "../../../../components/JobDetails/JobDetails";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import { IconCheck, IconPencil, IconTrash, IconX } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import JobDetailsSkeleton from "@/components/JobDetails/JobDetailsSkeleton";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import GoBackButton from "@/components/GoBackButton/GoBackButton";

export default function JobDetailsPage() {
  const { data: session } = useSession();
  const userId = session?.user?.userId;
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure(false);

  const { id } = router.query;
  const {
    data: job,
    isLoading,
    error,
  } = useSWR(userId ? `/api/${userId}/jobs/${id}` : null, {
    revalidateOnFocus: false,
  });

  async function deleteJob() {
    await fetch(`/api/${userId}/jobs/${id}`, { method: "DELETE" });
    notifications.show({
      title: "Done!",
      message: "The job has been deleted.",
      icon: <IconCheck />,
      color: "teal",
      autoClose: 5000,
      withBorder: true,
    });
    router.push("/");
  }

  return (
    <>
      <Header session={session} />
      <GoBackButton />

      <Flex justify="center">
        <Title>Job Details</Title>
      </Flex>

      {error ? <p>Failed to load job details...</p> : null}
      {!job && isLoading ? <JobDetailsSkeleton /> : null}
      {job ? (
        <>
          <JobDetails job={job} />
          <Group justify="center" mt="md" pb="32px">
            <Button
              variant="outline"
              size="sm"
              component="a"
              href={`/${userId}/jobs/${id}/edit`}
              px={18}
              leftSection={
                <IconPencil color="var(--mantine-color-blue-outline)" />
              }
            >
              Edit
            </Button>
            <Button
              variant="outline"
              color="rgba(255, 87, 87, 1)"
              size="sm"
              px="9px"
              onClick={open}
              leftSection={<IconTrash color="rgba(255, 87, 87, 1)" />}
            >
              Delete
            </Button>
          </Group>
          <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            align="center"
            centered
          >
            Are you sure you want to delete this job?
            <Group justify="center" gap={16} mt="md">
              <Button onClick={close} leftSection={<IconX />} px={17}>
                No
              </Button>
              <Button
                onClick={deleteJob}
                color="rgba(255, 87, 87, 1)"
                leftSection={<IconCheck />}
              >
                Yes
              </Button>
            </Group>
          </Modal>
        </>
      ) : null}
    </>
  );
}
