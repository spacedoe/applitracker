import {Flex, Group, Text, Title } from "@mantine/core";
import UserAvatar from "../UserAvatar/UserAvatar";

export default function Header() {
  return (
    <>
      <Flex justify="center" my="10px">
        <Title order={1}>
          <Text
            inherit
            fw={900}
            variant="gradient"
            gradient={{ from: "blue", to: "pink", deg: 90,  }}
          >
            Applitracker
          </Text>
        </Title>
      </Flex>
      <Group justify="flex-end" align="center"  style={{'position': 'absolute', 'top' : "10px", 'right': "10px"}} >
        <UserAvatar />
      </Group>
    </>
  );
}
