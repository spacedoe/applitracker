import {
  Button,
  Center,
  Flex,
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
} from "@tabler/icons-react";
import stageColorSetter, { localiseDate } from "../../utils/general";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faFaceGrinStars,
} from "@fortawesome/free-regular-svg-icons";
import DOMPurify from "dompurify";
import { useDisclosure } from "@mantine/hooks";
import classes from "./JobDetails.module.css";

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
    <Flex className={classes.container}>
      <Paper
        className={classes.paper}
        shadow="xs"
        withBorder
        w={"100%"}
        mx="auto"
      >
        <Center>
          <Flex wrap={"nowrap"} gap={16}>
            <Stack maw={500}>
              <Stack gap={0}>
                <Text fz="sm">Role:</Text>
                <Text>
                  <strong>{role}</strong>
                </Text>
              </Stack>

              <Stack gap={0}>
                <Text fz="sm">Company:</Text>
                <Text>
                  <strong>{company}</strong>
                </Text>
              </Stack>

              <Stack gap={0}>
                <Text fz="sm">Location:</Text>
                <Text>
                  <strong>{location}</strong>
                </Text>
              </Stack>

              <Flex
                className={classes.buttonsContainer}
                maw="fit-content"
                gap={16}
              >
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
              </Flex>

              <Modal
                opened={opened}
                onClose={close}
                title={`${role} at ${company}`}
                size="90%"
                styles={{
                  title: {
                    fontSize: "2rem",
                    color: "var(--mantine-color-blue-filled)",
                  },
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                />
              </Modal>

              <Stack gap={0}>
                <Text fz="sm">Contact person:</Text>
                <Text>
                  <strong>{contactPerson}</strong>
                </Text>
              </Stack>

              <Stack gap={0}>
                <Text fz="sm">Contact details:</Text>
                <Text>
                  <strong>{contactDetails}</strong>
                </Text>
              </Stack>

              <Stack gap={0} style={{ whiteSpace: "pre-wrap" }}>
                <Text fz="sm">Notes:</Text>
                <Text>
                  <em>{notes}</em>
                </Text>
              </Stack>
            </Stack>

            <Stack ml="auto">
              <Timeline active={10} bulletSize={30} lineWidth={2} color="blue">
                <Timeline.Item
                  key={_id}
                  className={classes.timelineItem1}
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
                      className={classes.timelineItemRest}
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
        </Center>
      </Paper>
    </Flex>
  );
}

// rfc
