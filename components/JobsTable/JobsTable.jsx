import {
  Anchor,
  Center,
  Group,
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
    "Initial Interview",
    "Second interview",
    "Technical interview",
    "Task",
    "Live coding",
    "Team fit",
    "Final interview",
    "Offer",
    "Paused",
    "Rejection",
    "No reply",
  ];

  const sortedJobs = [...jobs].sort((prev, curr) => {
    if (sortColumn === "stages") {
      const prevIndex = stageOrder.indexOf(
        prev.stages[prev.stages.length - 1].stageName
      );
      const currIndex = stageOrder.indexOf(
        curr.stages[curr.stages.length - 1].stageName
      );

      return sortDirection === "asc"
        ? prevIndex - currIndex
        : currIndex - prevIndex;
    } else if (sortColumn === "dates") {
      const prevDate = new Date(prev.stages[prev.stages.length - 1].stageDate);
      const currDate = new Date(curr.stages[curr.stages.length - 1].stageDate);
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
        <UnstyledButton onClick={onSort} className={classes.button}>
          <Group justify="space-between">
            <Text fw="bold">{children}</Text>
            <Center>
              <Icon
                style={{ width: "16px", height: "16px" }}
                stroke={1.5}
                color="var(--mantine-color-blue-filled)"
              />
            </Center>
          </Group>
        </UnstyledButton>
      </Table.Th>
    );
  }

  const rows = sortedJobs.map((job) => (
    <Table.Tr key={job._id}>
      <Table.Td>
        <Anchor href={`/${userId}/jobs/${job._id}`}>{job.role}</Anchor>
      </Table.Td>
      <Table.Td>{job.company}</Table.Td>
      <Table.Td>{job.location}</Table.Td>

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
        <Table>
          <Table.Thead>
            <Table.Tr fz="md">
              <Table.Th>Role</Table.Th>
              <Table.Th>Company</Table.Th>
              <Table.Th>Location</Table.Th>
              <TableHead
                sorted={sortColumn === "stages"}
                onSort={() => {
                  setSortColumn("stages");
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                }}
              >
                Latest stage
              </TableHead>
              <TableHead
                sorted={sortColumn === "dates"}
                onSort={() => {
                  setSortColumn("dates");
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                }}
              >
                Date
              </TableHead>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ) : null}
    </>
  );
}
