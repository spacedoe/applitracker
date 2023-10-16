import { Container } from "@mantine/core";
import Header from "@/components/Header/Header";
import JobsList from "@/components/JobsList/JobsList";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <JobsList />
    </Container>
  );
}

