import { Button, Group, Modal, Stack, Title } from "@mantine/core";
import Header from "../../../../components/Header/Header";
import JobDetails from "../../../../components/JobDetails/JobDetails";
import { useRouter } from "next/router.js";
import Link from "next/link";
import useSWR from "swr";
import {
  IconCheck,
  IconPencil,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import JobDetailsSkeleton from "@/components/JobDetails/JobDetailsSkeleton";
import GoBackBnt from "@/components/GoBackBnt/GoBackBnt";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

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
      <GoBackBnt />
      <Stack align="center" mx={20}>
        <Title>Job Details</Title>
        {error ? <p>Failed to load job details...</p> : null}
        {!job && isLoading ? <JobDetailsSkeleton /> : null}
        {job ? (
          <>
            <JobDetails job={job} />
            <Group justify="center" mt="md" mb="100px">
              <Button
                variant="outline"
                size="sm"
                component={Link}
                href={`/${userId}/jobs/${id}/edit`}
              >
                <IconPencil
                  style={{ marginRight: "5px" }}
                  color="var(--mantine-color-blue-outline)"
                />
                Edit
              </Button>
              <Button
                variant="outline"
                color="rgba(255, 87, 87, 1)"
                size="sm"
                px="9px"
                // onClick={deleteJob}
                onClick={open}
              >
                <IconTrash
                  style={{ marginRight: "5px" }}
                  color="rgba(255, 87, 87, 1)"
                />
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
                <Button onClick={close}>
                  <IconX style={{ marginRight: "6px" }} /> No
                </Button>
                <Button onClick={deleteJob} color="rgba(255, 87, 87, 1)">
                  <IconCheck style={{ marginRight: "6px" }} /> Yes
                </Button>
              </Group>
            </Modal>
          </>
        ) : null}
      </Stack>
    </>
  );
}
