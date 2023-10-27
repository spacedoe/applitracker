import { Hero } from "@/components/Hero/Hero";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function HomePage() {
    const { data: session } = useSession();
    const userId = session?.user?.userId
    const router = useRouter();

    
    if (!session) {
        return (
          <>
            <Hero />
          </>
        );
      } else router.push(`/${userId}`)
    
}