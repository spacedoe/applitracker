import { Button, Flex, Stack, Title } from "@mantine/core";
import Header from "../../../components/Header/Header";
import JobDetails from "../../../components/JobDetails/JobDetails";
import { useRouter } from "next/router.js";
import Link from "next/link";
import useSWR from "swr";

export default function JobDetailsPage() {
  const router = useRouter();

  const { id } = router.query;
  const { data: job, isLoading, error } = useSWR(`/api/jobs/${id}`);
  
  console.log("job", job);
  

  if (error) return <div>Failed to load</div>;
  if (!job || isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <Header />
      <Button variant="filled" size="sm" component={Link} href="/">
        Back
      </Button>
      <Stack align="center">
        <Title>Job Details</Title>
      <JobDetails job={job}/>
      
      <Button w="wrap-text">Edit</Button>
      </Stack>
    

    </>
  );
}
