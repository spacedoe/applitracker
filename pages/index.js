import { Container } from "@mantine/core";
import Header from "../components/Header/Header";
import JobsList from "../components/JobsList/JobsList"

import useSWR from "swr";

export default function HomePage() {
  const {data: jobs} = useSWR("/api/jobs", {fallbackData: []})
  console.log("jobs", jobs);

  return (
    <Container>
      <Header />
      <JobsList jobs={jobs}/>
    </Container>
  );
}

