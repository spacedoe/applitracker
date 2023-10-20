import { Anchor, Group, Table } from "@mantine/core";
import Link from "next/link";

export default function JobsTable({ jobs }) {
  const rows = jobs.map((job) => (
    <Table.Tr key={job._id}>
      <Table.Td>
        {" "}
        <Anchor href={`jobs/${job._id}`}>{job.role}</Anchor>
      </Table.Td>
      <Table.Td>{job.company}</Table.Td>
      <Table.Td>{job.location}</Table.Td>
      <Table.Td>{job.stages[job.stages.length - 1].name}</Table.Td>
      <Table.Td>{job.stages[job.stages.length - 1].date}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Role</Table.Th>
          <Table.Th>Company</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>stage</Table.Th>
          <Table.Th>date</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
