import { Box, Button, Flex, Group, TextInput } from "@mantine/core";

export default function Form() {
  return (
    <>
      {/* <FormContainer aria-labelledby={formName}>

        </FormContainer> */}

      <Box maw={480} mx="auto" style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}>
        <form onSubmit={() => console.log("Form submitted")}>
         <TextInput withAsterisk label="Title:" />
          <TextInput withAsterisk label="Company:" />
          <TextInput withAsterisk label="Location:" />
          <TextInput label="Description:"  />
          <TextInput withAsterisk label="URL:" />
          <TextInput label="Contact person:" />
          <TextInput label="Contact details:" />
          <TextInput label="Desired Salary:"/>
          <TextInput label="Notes:" />
          <TextInput withAsterisk label="Date:" />
          <TextInput withAsterisk label="Stage:" />
          
          <Group justify="center" mt="md">
          <Button type="submit">Submit</Button>
          <Button type="cancel">Cancel</Button>

        </Group>

        </form>
      </Box>
    </>
  );
}
