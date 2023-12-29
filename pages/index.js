import Footer from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Flex } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import classes from "./index.module.css";

export default function HomePage() {
  const { data: session, status } = useSession();
  const userId = session?.user?.userId;
  const router = useRouter();

  if (status === "unauthenticated")
    return (
      <Flex className={classes.container}>
        <Hero />
        <Footer />
      </Flex>
    );

  if (session && status === "authenticated") router.push(`/${userId}`);

  return null;
}
