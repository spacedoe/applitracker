import {
  Anchor,
  Button,
  Flex,
  Group,
  Modal,
  Paper,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";

import {
  IconCircleCheck,
  IconCircleMinus,
  IconCircleX,
  IconExternalLink,
  IconFileDescription,
  IconLink,
} from "@tabler/icons-react";
import stageColorSetter, { localiseDate } from "../../utils/general";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faFaceGrinStars,
} from "@fortawesome/free-regular-svg-icons";
import DOMPurify from "dompurify";
import { useDisclosure } from "@mantine/hooks";

export default function JobDetails({ job }) {
  const {
    _id,
    role,
    company,
    location,
    URL,
    description,
    contactPerson,
    contactDetails,
    notes,
    appliedOn,
    stages,
  } = job;

  const [opened, { open, close }] = useDisclosure(false);
  const sanitizedDescription = DOMPurify.sanitize(description);

  function setIcon(stageName) {
    switch (stageName) {
      case "Offer!":
        return <FontAwesomeIcon icon={faFaceGrinStars} size="lg" />;
      case "Rejection":
        return <IconCircleX />;
      case "Paused":
        return <FontAwesomeIcon icon={faCirclePause} size="lg" />;
      case "No reply":
        return <IconCircleMinus />;

      default:
        return <IconCircleCheck />;
    }
  }

  return (
    <Paper shadow="xs" p="xl" withBorder maw="768px" w={"100%"}>
      <Flex gap="20px" wrap={"nowrap"}>
        <Stack maw={500}>
          <Text fz="sm">
            Role: <br />
            <Text>
              <strong>{role}</strong>
            </Text>
          </Text>
          <Text fz="sm">
            Company: <br />
            <Text>
              <strong>{company}</strong>
            </Text>
          </Text>

          <Text fz="sm">
            Location: <br />
            <Text>
              <strong>{location}</strong>
            </Text>
          </Text>
          <Group >
            <Button
              leftSection={<IconExternalLink />}
              variant="outline"
              component="a"
              href={`${URL}`}
              target="_blank"
            >
              Go to the job post
            </Button>

            <Button
              leftSection={<IconFileDescription />}
              variant="outline"
              onClick={open}
              px={20}
            >
              Role description
            </Button>
          </Group>

          <Modal
            opened={opened}
            onClose={close}
            title={`${role} at ${company}`}
            size="70%"
            styles={{
              title: {
                fontSize: "2rem",
                color: "var(--mantine-color-blue-filled)",
              },
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          </Modal>

          <Text fz="sm">
            Contact person: <br />
            <Text>
              <strong>{contactPerson}</strong>
            </Text>
          </Text>

          <Text fz="sm">
            Contact details: <br />{" "}
            <Text>
              <strong>{contactDetails}</strong>
            </Text>
          </Text>

          <Text fz="sm" style={{ whiteSpace: "pre-wrap" }}>
            Notes:
            <br />
            <Text>
              <em>{notes}</em>
            </Text>
          </Text>
        </Stack>

        <Stack ml="auto">
          <Timeline active={10} bulletSize={30} lineWidth={2} color="blue">
            <Timeline.Item
              key={_id}
              mb="20px"
              bullet={<IconCircleCheck size={30} />}
              lineVariant="solid"
              title="Applied on:"
            >
              <Text size="xs" mt={4}>
                {localiseDate(appliedOn)}
              </Text>
            </Timeline.Item>

            {stages?.map((stage, index) => {
              const { _id, stageName, stageDate } = stage;

              return (
                <Timeline.Item
                  key={_id}
                  mb="20px"
                  bullet={setIcon(stageName)}
                  lineVariant="solid"
                  title={`Stage ${index + 1}`}
                  color={stageColorSetter(stageName, index)}
                >
                  <Text size="sm">{stageName}</Text>

                  <Text size="xs" mt={4}>
                    {localiseDate(stageDate)}
                  </Text>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Stack>
      </Flex>
    </Paper>
  );
}

// rfc
