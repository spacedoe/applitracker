import SignIn from "./SignIn/SignIn"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { useSession } from "next-auth/react";

export default function Profile() {
    const { data: session } = useSession();

    return (
        <section >
            {session ? <ProfileInfo session={session} /> : <SignIn />}
        </section>
    );
}
