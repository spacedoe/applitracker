import { Anchor, Table } from "@mantine/core";
import { localiseDate } from "../../utils/general";
import { useState } from "react";
import { IconSelector } from "@tabler/icons-react";

export default function JobsTable({ jobs, userId }) {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortColumn, setSortColumn] = useState("dates");

  const stageOrder = [
    "Applied on",
    "Initial interview",
    "Technical interview",
    "Technical challenge",
    "Live coding",
    "Team fit",
    "Final interview",
    "Offer",
    "Pause",
    "Rejection",
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

  const rows = sortedJobs.map((job) => (
    <Table.Tr key={job._id}>
      <Table.Td>
        <Anchor href={`/${userId}/jobs/${job._id}`}>{job.role}</Anchor>
      </Table.Td>
      <Table.Td>{job.company}</Table.Td>
      <Table.Td>{job.location}</Table.Td>
      <Table.Td>{job?.stages[job.stages.length - 1].stageName}</Table.Td>
      <Table.Td>
        {localiseDate(job?.stages[job.stages.length - 1].stageDate)}
      </Table.Td>
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
              <Table.Th onClick={() => setSortColumn("stages")}>
                Latest stage
                <IconSelector
                  size="16px"
                  color="var(--mantine-color-blue-filled)"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    top: "3px",
                  }}
                  onClick={() =>
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                  }
                />
              </Table.Th>
              <Table.Th onClick={() => setSortColumn("dates")}>
                Date
                <IconSelector
                  size="16px"
                  color="var(--mantine-color-blue-filled)"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    top: "3px",
                  }}
                  onClick={() =>
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                  }
                />
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ) : null}
    </>
  );
}
