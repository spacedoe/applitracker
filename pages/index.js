import Footer from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function HomePage() {
  const { data: session, status } = useSession();
  const userId = session?.user?.userId;
  const router = useRouter();

  if (status === "unauthenticated") return (<>
  <Hero />
  <Footer/>
  </>);

  if (session && status === "authenticated") router.push(`/${userId}`);

  return null;
}
