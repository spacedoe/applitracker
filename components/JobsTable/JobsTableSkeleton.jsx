import { Skeleton, Table } from "@mantine/core";

export default function JobsTableSkeleton() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Role</Table.Th>
          <Table.Th>Company</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>Latest stage</Table.Th>
          <Table.Th>Date</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={18} radius="xl" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
          <Table.Td>
            <Skeleton height={20} radius="xl" />
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
