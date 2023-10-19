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

export default function Form() {
  return (
    <>
      <Box maw={600} mx="auto" my="sm">
        <form onSubmit={() => console.log("Form submitted")}>
          <Flex direction="column" gap="md">
            <Fieldset>
              <TextInput
                withAsterisk
                label="Role"
                placeholder="What is the role title?"
              />
              <TextInput
                withAsterisk
                label="Company"
                placeholder="What is the company name?"
              />
              <TextInput
                withAsterisk
                label="Location"
                placeholder="Office address/work from home/hybrid"
              />
              <TextInput
                withAsterisk
                label="URL:"
                placeholder="Job post link"
              />
              <Textarea
                label="Description"
                placeholder="What does the role involve?"
              />
            </Fieldset>
            <Fieldset>
              <TextInput
                label="Contact person:"
                placeholder="Full name, title"
              />
              <TextInput
                label="Contact details:"
                placeholder="Email, phone number, etc."
              />
            </Fieldset>
            <Textarea
              label="Notes"
              placeholder="Add notes about the role & process"
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
