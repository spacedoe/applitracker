import { Button, Flex, Group, Stack, Title } from "@mantine/core";
import Header from "../../../components/Header/Header";
import JobDetails from "../../../components/JobDetails/JobDetails";
import { useRouter } from "next/router.js";
import Link from "next/link";
import useSWR from "swr";
import { IconTrash } from "@tabler/icons-react";

export default function JobDetailsPage() {
  const router = useRouter();

  const { id } = router.query;
  const { data: job, isLoading, error } = useSWR(`/api/jobs/${id}`);
  

  if (error) return <div>Failed to load</div>;
  if (!job || isLoading) return <h2>Loading...</h2>;

  async function deleteJob() {
    await fetch(`/api/jobs/${id}`, {method: "DELETE"})
    router.push("/")
  }


  return (
    <>
      <Header />
      <Button variant="filled" size="sm" component={Link} href="/">
        Back
      </Button>
      <Stack align="center">
        <Title>Job Details</Title>
      <JobDetails job={job}/>
      
      <Group justify="center" mt="md">
      <Button variant="outline" size="sm">Edit</Button>
      <Button variant="outline"
        color="rgba(255, 87, 87, 1)"
        size="sm"
        px="5px"
        onClick={deleteJob}><IconTrash color="rgba(255, 87, 87, 1)" /></Button>
      </Group>
      </Stack>
    

    </>
  );
}
