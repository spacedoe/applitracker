import {
  Badge,
  Button,
  Fieldset,
  Flex,
  NativeSelect,
  TextInput,
  rem,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconTrash } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { uid } from "uid";
import Stage from "../Stage/Stage";

export default function StagesField() {
  const stage = {
    stageName: "",
    stageDate: "",
  };

  const [stages, setStages] = useState([{ ...stage, uid: uid() }]);
  console.log("stages", stages);

  function addStage() {
    setStages([...stages, { ...stage, uid: uid() }]);
  }

  function deleteStage(uid) {
    setStages(stages.filter(stage => stage.uid !== uid))

  }

  return (
    <>
      <Flex>
        <Button onClick={addStage}>+ Stage</Button>
      </Flex>

      {stages && (
        <Fieldset>
          {stages.map((stage, index) => {
            console.log();
            return (
              <Fragment key={stage.uid}>
                <Stage count={index + 1} onDeleteStage={deleteStage} uid={stage.uid}/>
              </Fragment>
            );
          })}
        </Fieldset>
      )}
    </>
  );
}
