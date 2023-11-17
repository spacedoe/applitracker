import {
  Box,
  Button,
  Fieldset,
  Group,
  TextInput,
  Textarea,
  Flex,
  Badge,
} from "@mantine/core";
import StagesField from "../StagesField/StagesField";
import { DatePickerInput } from "@mantine/dates";
import EditorComponent from "../EditorComponent/EditorComponent";
import { useState } from "react";

export default function Form({ onSubmit, formName, savedData }) {
  const [editor, setEditor] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const jobData = {
      role: formData.get("role"),
      company: formData.get("company"),
      location: formData.get("location"),
      URL: formData.get("URL"),
      description: editor.getHTML(),
      contactPerson: formData.get("contactPerson"),
      contactDetails: formData.get("contactDetails"),
      notes: formData.get("notes"),
      appliedOn: formData.get("appliedOn"),
      stages: [],
    };

    console.log("jobData", jobData);
    console.log("FormData", FormData);

    const stageNames = formData.getAll("stageName");
    const stageDates = formData.getAll("stageDate");
    for (let i = 0; i < stageNames.length; i++) {
      jobData.stages.push({
        stageName: stageNames[i],
        stageDate: stageDates[i],
      });
    }
    onSubmit(jobData);
    event.target.reset();
    editor.commands.setContent("");
  }

  return (
    <Box maw={600} mx="auto" my="xl" mb="100px">
      <form aria-labelledby={formName} onSubmit={handleSubmit}>
        <Flex direction="column" gap="md">
          <Fieldset>
            <TextInput
              withAsterisk
              label="Role"
              placeholder="What is the role title?"
              name="role"
              defaultValue={savedData?.role}
              required
            />
            <TextInput
              withAsterisk
              label="Company"
              placeholder="What is the company name?"
              name="company"
              defaultValue={savedData?.company}
              required
            />
            <TextInput
              withAsterisk
              label="Location"
              placeholder="Office address/work from home/hybrid"
              name="location"
              defaultValue={savedData?.location}
              required
            />
            <TextInput
              withAsterisk
              label="URL"
              placeholder="Job post link"
              name="URL"
              defaultValue={savedData?.URL}
              required
            />
          </Fieldset>

          <EditorComponent savedData={savedData} setEditor={setEditor} />

          <Fieldset>
            <TextInput
              label="Contact person"
              placeholder="Full name, title"
              name="contactPerson"
              defaultValue={savedData?.contactPerson}
            />
            <TextInput
              label="Contact details"
              placeholder="Email, phone number, etc."
              name="contactDetails"
              defaultValue={savedData?.contactDetails}
            />
          </Fieldset>
          <Textarea
            label="Notes"
            placeholder="Add notes about the role & process"
            name="notes"
            defaultValue={savedData?.notes}
            autosize
            minRows={6}
            styles={{label: {marginLeft: "24px"}}}
          />

          <Fieldset>
            <Flex gap="38px" align="flex-end" direction="row" mb="sm">
              <Badge
                variant="filled"
                color="var(--mantine-color-gray-6)"
                size="lg"
                radius="sm"
                h="36px"
              >
                Applied on
              </Badge>
              <DatePickerInput
                valueFormat="DD.MM.YYYY"
                label="Date"
                name="appliedOn"
                maw="120px"
                defaultValue={
                  savedData ? new Date(savedData?.appliedOn) : new Date()
                }
                required
              />
            </Flex>

            <StagesField savedData={savedData} />
          </Fieldset>
        </Flex>

        <Group justify="center" mt="md" mb="32px">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
