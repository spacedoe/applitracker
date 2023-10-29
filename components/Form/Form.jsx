import {
  Box,
  Button,
  Fieldset,
  Group,
  TextInput,
  Textarea,
  Flex,
} from "@mantine/core";
import StagesField from "../StagesField/StagesField";

export default function Form({ onSubmit, formName, savedData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const jobData = {
      role: formData.get("role"),
      company: formData.get("company"),
      location: formData.get("location"),
      URL: formData.get("URL"),
      summary: formData.get("summary"),
      contactPerson: formData.get("contactPerson"),
      contactDetails: formData.get("contactDetails"),
      notes: formData.get("notes"),
      stages: [],
    };

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
  }

  return (
    <>
      <Box maw={600} mx="auto" my="sm">
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

              <Textarea
                label="Summary"
                placeholder="The role involves..."
                name="summary"
                defaultValue={savedData?.summary}
              />
            </Fieldset>
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
            />

            <StagesField savedData={savedData} />
          </Flex>

          <Group justify="center" mt="md" mb="32px">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
