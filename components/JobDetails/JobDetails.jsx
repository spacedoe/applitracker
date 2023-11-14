import {
  Anchor,
  Flex,
  Paper,
  Spoiler,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";

import {
  IconCircleCheck,
  IconCircleMinus,
  IconCircleX,
} from "@tabler/icons-react";
import stageColorSetter, { localiseDate } from "../../utils/general";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faFaceGrinStars,
} from "@fortawesome/free-regular-svg-icons";
import DOMPurify from "dompurify";

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
          <Text>
            Role: <strong>{role}</strong>{" "}
          </Text>
          <Text>
            Company: <strong>{company}</strong>
          </Text>
          <Text>
            Location: <strong>{location}</strong>
          </Text>
          <Text>
            <Anchor href={`${URL}`} target="_blank">
              <strong>Job offer link</strong>
            </Anchor>
          </Text>
              <Text ta="justify">Description:</Text>
          <Paper shadow="xs" px="md" withBorder>
            <Spoiler maxHeight={262} showLabel="Show more" hideLabel="Hide">
              
              <div style={{ lineHeight: 1.3, lineHeightStep: 1}} dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            </Spoiler>
          </Paper>
          <Text>
            Contact person: <strong>{contactPerson}</strong>
          </Text>
          <Text>
            Contact details: <strong>{contactDetails}</strong>
          </Text>
          <Text>
            Notes: <br />
            <em>{notes}</em>
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
