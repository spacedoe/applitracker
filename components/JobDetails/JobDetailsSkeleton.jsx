import { Flex, Paper, Stack, Text, Timeline, Skeleton } from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons-react";
export default function JobDetailsSkeleton() {
  return (
    <Paper shadow="xs" p="xl" withBorder maw={600} w="100%">
      <Flex gap="70px">
        <Stack w="100%">
          <Flex>
            <Text>Role:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>

          <Flex>
            <Text>Company:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>

          <Flex>
            <Text>Location:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>

          <Flex>
            <Text>URL:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>

          <Flex>
            <Text>Description:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>

          <Flex>
            <Text w="165px">Contact person:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>
          <Flex>
            <Text w="165px">Contact details:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>
          <Flex>
            <Text>Notes:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>
        </Stack>
      </Flex>
    </Paper>
  );
}
