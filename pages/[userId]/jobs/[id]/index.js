import { Button, Group, Stack, Title } from "@mantine/core";
import Header from "../../../../components/Header/Header";
import JobDetails from "../../../../components/JobDetails/JobDetails";
import { useRouter } from "next/router.js";
import Link from "next/link";
import useSWR from "swr";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import JobDetailsSkeleton from "@/components/JobDetails/JobDetailsSkeleton";
import GoBackBnt from "@/components/GoBackBnt/GoBackBnt";
import Footer from "@/components/Footer/Footer";

export default function JobDetailsPage() {
  const { data: session } = useSession();
  const userId = session?.user?.userId;
  const router = useRouter();

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
                onClick={deleteJob}
              >
                <IconTrash
                  style={{ marginRight: "5px" }}
                  color="rgba(255, 87, 87, 1)"
                />
                Delete
              </Button>
            </Group>
          </>
        ) : null}
      </Stack>
      <Footer/>
    </>
  );
}
