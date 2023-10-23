import { Button, Fieldset, Flex } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { uid } from "uid";
import Stage from "../Stage/Stage";

export default function StagesField({ savedData }) {
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
    if (savedData) {
      let { stages: savedStages } = savedData;
      savedStages.map((stage) => {
        return {
          ...stage,
          uid: uid(),
        };
      });
      setStages(savedStages);
    }
    console.log("saved stages data", savedData?.stages);
  }, [savedData]);

  return (
    <>
      {stages ? (
        <Fieldset>
          {stages.map((stage, index) => {
            return (
              <Fragment key={stage.uid}>
                <Stage
                  count={index + 1}
                  onDeleteStage={deleteStage}
                  uid={stage.uid}
                  stage={stage}
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
      ) : null}
    </>
  );
}
