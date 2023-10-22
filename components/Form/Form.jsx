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

export default function Form({ onAddJob, formName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const jobData = Object.fromEntries(formData);

    const jobData = {
      role: formData.get("role"),
      company: formData.get("company"),
      location: formData.get("location"),
      URL: formData.get("URL"),
      description: formData.get("description"),
      contactPerson: formData.get("contactPerson"),
      contactDetails: formData.get("contactDetails"),
      notes: formData.get("notes"),
      stages: [],
    };

    const stageNames = formData.getAll("stageName");
    const stageDates = formData.getAll("stageDate");
    for (let i = 0; i < stageNames.length; i++) {
      // Convert date from UTC time zone to locale time zone
      let date = new Date(stageDates[i]);
      let formattedDate = date.toLocaleDateString("de-DE", {
        // Options for DD.MM.YYYY
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      // Update stages object
      jobData.stages.push({
        stageName: stageNames[i],
        stageDate: formattedDate,
      });
    }

    console.log("hc jobData", jobData);
    onAddJob(jobData);
    // event.target.reset();
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
              />
              <TextInput
                withAsterisk
                label="Company"
                placeholder="What is the company name?"
                name="company"
              />
              <TextInput
                withAsterisk
                label="Location"
                placeholder="Office address/work from home/hybrid"
                name="location"
              />
              <TextInput
                withAsterisk
                label="URL"
                placeholder="Job post link"
                name="URL"
              />

              <Textarea
                label="Description"
                placeholder="What does the role involve?"
                name="description"
              />
            </Fieldset>
            <Fieldset>
              <TextInput
                label="Contact person"
                placeholder="Full name, title"
                name="contactPerson"
              />
              <TextInput
                label="Contact details"
                placeholder="Email, phone number, etc."
                name="contactDetails"
              />
            </Fieldset>
            <Textarea
              label="Notes"
              placeholder="Add notes about the role & process"
              name="notes"
            />

            <StagesField />
          </Flex>

          <Group justify="center" mt="md">
            <Button type="submit">Submit</Button>
            <Button type="cancel">Cancel</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
