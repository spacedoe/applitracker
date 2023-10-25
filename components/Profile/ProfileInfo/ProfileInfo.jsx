
import AuthButton from "../../AuthButton/AuthButton";
import { Avatar } from "@mantine/core";

export default function ProfileInfo({ session }) {
  return (
    <>
      <Avatar
        width={200}
        height={200}
        src={session.user?.image}
        alt="Avatar"
        priority
        radius="100%"
        size="lg"
      />

      <div>
        <h1>Hello {session.user?.name}</h1>
        <p>You are signed in as {session.user?.email}</p>
        <AuthButton />
      </div>
    </>
  );
}
