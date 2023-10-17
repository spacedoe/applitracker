import { Anchor, Button, NavLink, Text, Title } from "@mantine/core";
import { IconArrowBadgeLeftFilled, IconHome2 } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconHome } from "@tabler/icons-react";
import Form from "@/components/Form/Form";

export default function AddJobPage() {
  const router = useRouter();

  return (
    <>
      <Title>Add Job</Title>
      <Button variant="filled" size="sm" component={Link} href="/">Back</Button>
      <Form/>
    </>
  );
}
