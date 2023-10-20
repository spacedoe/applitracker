import { Text } from "@mantine/core";
import { Fragment } from "react";

export default function JobDetails({job}) {

    const {role, company, location, URL, description, contactPerson, contactDetails, notes, stages} = job
    

    return (
    <>
    <Text>Role: {role} </Text>
    <Text>Company: {company}</Text>
    <Text>Location: {location}</Text>
    <Text>URL:{URL} </Text>
    <Text>Description: {description}</Text>
    <Text>Contact person: {contactPerson}</Text>
    <Text>Contact details: {contactDetails}</Text>
    <Text>Notes: {notes}</Text>

    {/* <Text>{stages[0].name}</Text>
    <Text>{stages[0].date}</Text> */}

    {stages.map(stage => {
        return (
      
        <Fragment key={stage._id}>
            <Text>{stage.name}</Text>
            <Text>{stage.date}</Text>
        </Fragment>

        )

    })}
    

    </>

    )
}

// rfc
