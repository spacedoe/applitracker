import { Flex, Paper, Stack, Text, Timeline, Skeleton } from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons-react";
export default function JobDetailsSkeleton() {
  return (
    <Paper shadow="xs" p="xl" withBorder maw="600px" mx="auto">
      <Flex gap="70px">
        <Stack>
          <Text>
            Role: <Skeleton height={18} mt={8} radius="xl" />
          </Text>
          <Text>
            Company: <Skeleton height={18} mt={8} radius="xl" />
          </Text>
          <Text>
            Location: <Skeleton height={18} mt={8} radius="xl" />
          </Text>
          <Text>
            URL:
            <Skeleton height={18} mt={8} radius="xl" />
          </Text>
          <Text>
            Description: <Skeleton height={18} mt={8} radius="xl" />
          </Text>
          <Text>
            Contact person: <Skeleton height={18} mt={8} radius="xl" />
          </Text>
          <Text>
            Contact details: <Skeleton height={18} mt={8} radius="xl" />
          </Text>
          <Text>
            Notes: <Skeleton height={18} mt={8} radius="xl" />
          </Text>
        </Stack>

        <Stack>
          <Timeline active={10} bulletSize={30} lineWidth={2} color="blue">
            <Timeline.Item
              mb="20px"
              bullet={<IconCircleCheck size={30} />}
              lineVariant="solid"
            >
              <Skeleton height={18} radius="xl" />
            </Timeline.Item>
          </Timeline>
        </Stack>
      </Flex>
    </Paper>
  );
}
