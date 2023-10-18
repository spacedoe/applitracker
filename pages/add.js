import { Button, Flex, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";

export default function AddJobPage() {
  const router = useRouter();

  return (
    <>
    <Header />
      <Flex justify="center">
      <Title>Add Job</Title>
      </Flex>
      <Button variant="filled" size="sm" component={Link} href="/">Back</Button>
      <Form/>
    </>
  );
}
