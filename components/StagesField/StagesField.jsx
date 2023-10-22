import {
  Badge,
  Button,
  Fieldset,
  Flex,

} from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { uid } from "uid";
import Stage from "../Stage/Stage";

export default function StagesField() {
  const stage = {
    stageName: "",
    stageDate: "",
  };

  const [stages, setStages] = useState([{ ...stage, uid: uid() }]);

  function addStage() {
    setStages([...stages, { ...stage, uid: uid() }]);
  }

  function deleteStage(uid) {
    setStages(stages.filter((stage) => stage.uid !== uid));
  }

  useEffect(() => {
    console.log("stages c", stages);
  }, [stages]);

  return (
    <>
      {stages && (
        <Fieldset>
          {stages.map((stage, index) => {
            return (
              <Fragment key={stage.uid}>
                <Stage
                  count={index + 1}
                  onDeleteStage={deleteStage}
                  uid={stage.uid}
                />
              </Fragment>
            );
          })}
          <Flex>
            <Button mt="10px" w="103.9px" onClick={addStage}>
              + Stage
            </Button>
          </Flex>
        </Fieldset>
      )}
    </>
  );
}
