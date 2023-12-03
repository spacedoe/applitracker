import { Flex, Paper, Stack, Text, Skeleton } from "@mantine/core";
import classes from "./JobDetailsSkeleton.module.css";

export default function JobDetailsSkeleton() {
  return (
    <Flex className={classes.container}>
      <Paper
        className={classes.paper}
        shadow="xs"
        withBorder
        w="100%"
        mx="auto"
      >
        <Flex gap="20px" mx="xs">
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
            <Stack>
              <Skeleton height={18} mt={6} radius="xl" />
              <Skeleton height={18} mt={6} radius="xl" />
              <Skeleton height={18} mt={6} radius="xl" />
              <Skeleton height={18} mt={6} radius="xl" />
            </Stack>

            <Flex>
              <Text style={{ whiteSpace: "nowrap" }}> Contact person:</Text>
              <Skeleton height={18} mt={6} ml="sm" radius="xl" />
            </Flex>
            <Flex>
              <Text style={{ whiteSpace: "nowrap" }}>Contact details:</Text>
              <Skeleton height={18} mt={6} ml="sm" radius="xl" />
            </Flex>
            <Flex>
              <Text>Notes:</Text>
              <Skeleton height={18} mt={6} ml="sm" radius="xl" />
            </Flex>
            <Stack>
              <Skeleton height={18} mt={6} radius="xl" />
            </Stack>
          </Stack>
        </Flex>
      </Paper>
    </Flex>
  );
}
