import {
  Anchor,
  Center,
  Flex,
  ScrollArea,
  Stack,
  Table,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { localiseDate } from "../../utils/general";
import { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from "@tabler/icons-react";
import classes from "./JobsTable.module.css";

export default function JobsTable({ jobs, userId }) {
  const [sortDirection, setSortDirection] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  const stageOrder = [
    "Applied on",
    "Initial Interview",
    "Second interview",
    "Technical interview",
    "Task",
    "Live coding",
    "Team fit",
    "Final interview",
    "Offer!",
    "Paused",
    "No reply",
    "Rejection",
  ];

  const sortedJobs = [...jobs].sort((prev, curr) => {
    if (sortColumn === "stages") {
      const prevIndex =
        prev.stages.length > 0
          ? stageOrder.indexOf(prev.stages[prev.stages.length - 1].stageName)
          : -Infinity;
      const currIndex =
        curr.stages.length > 0
          ? stageOrder.indexOf(curr.stages[curr.stages.length - 1].stageName)
          : -Infinity;

      return sortDirection === "asc"
        ? prevIndex - currIndex
        : currIndex - prevIndex;
    } else if (sortColumn === "dates") {
      const prevDate =
        prev.stages.length > 0
          ? new Date(prev.stages[prev.stages.length - 1].stageDate)
          : new Date(prev.appliedOn);
      const currDate =
        curr.stages.length > 0
          ? new Date(curr.stages[curr.stages.length - 1].stageDate)
          : new Date(curr.appliedOn);

      return sortDirection === "asc"
        ? prevDate - currDate
        : currDate - prevDate;
    }
  });

  function TableHead({ children, sorted, onSort }) {
    const Icon = sorted
      ? sortDirection === "desc"
        ? IconChevronUp
        : IconChevronDown
      : IconSelector;
    return (
      <Table.Th fz="md">
        <UnstyledButton onClick={onSort} className={classes.filterButton}>
          <Flex direction="row" justify="center">
            <Text fw="bold">{children}</Text>
            <Center>
              <Icon
                size={16}
                stroke={2}
                color="var(--mantine-color-blue-filled)"
                style={{ marginLeft: "4px" }}
              />
            </Center>
          </Flex>
        </UnstyledButton>
      </Table.Th>
    );
  }

  const rows = sortedJobs.map((job) => (
    <Table.Tr key={job._id}>
      <Table.Td>
        <Anchor href={`/${userId}/jobs/${job._id}`}>{job.role}</Anchor>
      </Table.Td>
      <Table.Td visibleFrom="sm">{job.company}</Table.Td>
      <Table.Td visibleFrom="sm">{job.location}</Table.Td>

      {job.stages.length > 0 ? (
        <>
          <Table.Td>{job?.stages[job.stages.length - 1].stageName}</Table.Td>
          <Table.Td>
            {localiseDate(job?.stages[job.stages.length - 1].stageDate)}
          </Table.Td>
        </>
      ) : (
        <>
          <Table.Td>Applied on</Table.Td>
          <Table.Td>{localiseDate(job.appliedOn)}</Table.Td>
        </>
      )}
    </Table.Tr>
  ));

  return (
    <>
      {jobs && jobs.length > 0 ? (
        <Stack className={classes.container}>
          <ScrollArea h={448}>
            <Table stickyHeader highlightOnHover>
              <Table.Thead>
                <Table.Tr fz="md">
                  <Table.Th>Role</Table.Th>
                  <Table.Th visibleFrom="sm">Company</Table.Th>
                  <Table.Th visibleFrom="sm">Location</Table.Th>
                  <TableHead
                    sorted={sortColumn === "stages"}
                    onSort={() => {
                      setSortColumn("stages");
                      setSortDirection(
                        sortDirection === "asc" ? "desc" : "asc"
                      );
                    }}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Latest stage
                  </TableHead>
                  <TableHead
                    sorted={sortColumn === "dates"}
                    onSort={() => {
                      setSortColumn("dates");
                      setSortDirection(
                        sortDirection === "asc" ? "desc" : "asc"
                      );
                    }}
                  >
                    Date
                  </TableHead>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>
          <Text fs="italic" fz={14} ml={8} ta="end" pr={8}>
            You&apos;ve applied to <strong>{jobs.length}</strong>{" "}
            {jobs.length === 1 ? "job." : "jobs."}
          </Text>
        </Stack>
      ) : null}
    </>
  );
}
