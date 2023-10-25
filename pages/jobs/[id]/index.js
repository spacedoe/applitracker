import { Button, Group, Stack, Title } from "@mantine/core";
import Header from "../../../components/Header/Header";
import JobDetails from "../../../components/JobDetails/JobDetails";
import { useRouter } from "next/router.js";
import Link from "next/link";
import useSWR from "swr";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export default function JobDetailsPage() {
  const router = useRouter();

  const { id } = router.query;
  const { data: job, isLoading, error } = useSWR(`/api/jobs/${id}`);

  if (error) return <div>Failed to load</div>;
  if (!job || isLoading) return <h2>Loading...</h2>;

  async function deleteJob() {
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    router.push("/");
  }

  return (
    <>
      <Header />
      <Button variant="filled" size="sm" component={Link} href="/">
        Back
      </Button>
      <Stack align="center">
        <Title>Job Details</Title>
        <JobDetails job={job} />

        <Group justify="center" mt="md">
          <Button
            variant="outline"
            size="sm"
            component={Link}
            href={`/jobs/${id}/edit`}
            
          >
            <IconPencil style={{"marginRight": "5px"}} color="var(--mantine-color-blue-outline)"/>Edit
          </Button>
          <Button
            variant="outline"
            color="rgba(255, 87, 87, 1)"
            size="sm"
            px="9px"
            onClick={deleteJob}
          >
            <IconTrash style={{"marginRight": "5px"}} color="rgba(255, 87, 87, 1)" />Delete
          </Button>
        </Group>
      </Stack>
    </>
  );
}
