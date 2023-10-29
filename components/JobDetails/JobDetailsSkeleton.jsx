import { Flex, Paper, Stack, Text, Skeleton } from "@mantine/core";

export default function JobDetailsSkeleton() {
  return (
    <Paper shadow="xs" p="xl" withBorder maw={768} w="100%">
      <Flex gap="20px" mx="lg">
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
            <Text>Summary:</Text>
            <Skeleton height={18} mt={6} ml="sm" radius="xl" />
          </Flex>
            <Stack>

            <Skeleton height={18} mt={6}  radius="xl" />
            <Skeleton height={18} mt={6}  radius="xl" />
            <Skeleton height={18} mt={6}  radius="xl" />
            <Skeleton height={18} mt={6}  radius="xl" />
            </Stack>

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
